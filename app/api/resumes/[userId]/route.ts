// // app/api/resumes/[userId]/route.ts - Secure API routes
// import { NextRequest, NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';
// import { currentUser } from '@clerk/nextjs/server';


// export async function GET(
//   request: NextRequest,
//   { params }: { params: { userId: string } }
// ) {
//   try {
//     const user = await currentUser();
    
//     // CRITICAL: Only allow access to own data
//     if (!user || user.id !== params.userId) {
//       return NextResponse.json(
//         { error: 'Unauthorized: Access denied' }, 
//         { status: 403 }
//       );
//     }

//     // Fetch ONLY this user's resume
//     const resume = await prisma.resume.findUnique({
//       where: { userId: user.id },
//     });

//     // Double-check: ensure resume belongs to authenticated user
//     if (resume && resume.userId !== user.id) {
//       console.error(`SECURITY ALERT: Resume ${resume.id} belongs to ${resume.userId} but requested by ${user.id}`);
//       return NextResponse.json(
//         { error: 'Data access violation' }, 
//         { status: 403 }
//       );
//     }

//     return NextResponse.json(resume);
//   } catch (error) {
//     console.error('Resume GET error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(
//   request: NextRequest,
//   { params }: { params: Promise<{ userId: string }> }
// ) {
//   try {
//     // Await the params promise
//     const resolvedParams = await params;
//     const user = await currentUser();
    
//     // CRITICAL: Only allow creating own resume
//     if (!user || user.id !== resolvedParams.userId) {
//       return NextResponse.json(
//         { error: 'Unauthorized: Cannot create resume for another user' }, 
//         { status: 403 }
//       );
//     }

//     const body = await request.json();
    
//     // Security: Force userId to authenticated user
//     const secureData = {
//       ...body,
//       userId: user.id, // ALWAYS use authenticated user ID
//     };

//     const resume = await prisma.resume.upsert({
//       where: { userId: user.id },
//       update: secureData,
//       create: secureData,
//     });

//     // Verify created/updated resume belongs to correct user
//     if (resume.userId !== user.id) {
//       console.error('CRITICAL: Resume user ID mismatch after creation');
//       throw new Error('Data integrity violation');
//     }

//     return NextResponse.json(resume);
//   } catch (error) {
//     console.error('Resume POST error:', error);
//     return NextResponse.json(
//       { error: 'Failed to save resume' },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: Promise<{ userId: string }> }
// ) {
//   try {
//     // Await the params promise
//     const resolvedParams = await params;
//     const user = await currentUser();
    
//     // CRITICAL: Only allow updating own resume
//     if (!user || user.id !== resolvedParams.userId) {
//       return NextResponse.json(
//         { error: 'Unauthorized: Cannot update another user\'s resume' }, 
//         { status: 403 }
//       );
//     }

//     const body = await request.json();
    
//     // Security: Ensure userId cannot be changed
//     const secureData = {
//       ...body,
//       userId: user.id, // Lock to authenticated user
//     };

//     const resume = await prisma.resume.update({
//       where: { 
//         userId: user.id, // Only update if belongs to this user
//       },
//       data: secureData,
//     });

//     return NextResponse.json(resume);
//   } catch (error) {
//     console.error('Resume PUT error:', error);
//     return NextResponse.json(
//       { error: 'Failed to update resume' },
//       { status: 500 }
//     );
//   }
// }





// app/api/resumes/[userId]/route.ts - Secure API routes
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    // Await the params promise
    const resolvedParams = await params;
    const user = await currentUser();
    
    // CRITICAL: Only allow access to own data
    if (!user || user.id !== resolvedParams.userId) {
      return NextResponse.json(
        { error: 'Unauthorized: Access denied' }, 
        { status: 403 }
      );
    }

    // Fetch ONLY this user's resume
    const resume = await prisma.resume.findUnique({
      where: { userId: user.id },
    });

    // Double-check: ensure resume belongs to authenticated user
    if (resume && resume.userId !== user.id) {
      console.error(`SECURITY ALERT: Resume ${resume.id} belongs to ${resume.userId} but requested by ${user.id}`);
      return NextResponse.json(
        { error: 'Data access violation' }, 
        { status: 403 }
      );
    }

    return NextResponse.json(resume);
  } catch (error) {
    console.error('Resume GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    // Await the params promise
    const resolvedParams = await params;
    const user = await currentUser();
    
    // CRITICAL: Only allow creating own resume
    if (!user || user.id !== resolvedParams.userId) {
      return NextResponse.json(
        { error: 'Unauthorized: Cannot create resume for another user' }, 
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // Security: Force userId to authenticated user
    const secureData = {
      ...body,
      userId: user.id, // ALWAYS use authenticated user ID
    };

    const resume = await prisma.resume.upsert({
      where: { userId: user.id },
      update: secureData,
      create: secureData,
    });

    // Verify created/updated resume belongs to correct user
    if (resume.userId !== user.id) {
      console.error('CRITICAL: Resume user ID mismatch after creation');
      throw new Error('Data integrity violation');
    }

    return NextResponse.json(resume);
  } catch (error) {
    console.error('Resume POST error:', error);
    return NextResponse.json(
      { error: 'Failed to save resume' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    // Await the params promise
    const resolvedParams = await params;
    const user = await currentUser();
    
    // CRITICAL: Only allow updating own resume
    if (!user || user.id !== resolvedParams.userId) {
      return NextResponse.json(
        { error: 'Unauthorized: Cannot update another user\'s resume' }, 
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // Security: Ensure userId cannot be changed
    const secureData = {
      ...body,
      userId: user.id, // Lock to authenticated user
    };

    const resume = await prisma.resume.update({
      where: { 
        userId: user.id, // Only update if belongs to this user
      },
      data: secureData,
    });

    return NextResponse.json(resume);
  } catch (error) {
    console.error('Resume PUT error:', error);
    return NextResponse.json(
      { error: 'Failed to update resume' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    // Await the params promise
    const resolvedParams = await params;
    const user = await currentUser();
    
    // CRITICAL: Only allow deleting own resume
    if (!user || user.id !== resolvedParams.userId) {
      return NextResponse.json(
        { error: 'Unauthorized: Cannot delete another user\'s resume' }, 
        { status: 403 }
      );
    }

    const resume = await prisma.resume.delete({
      where: { userId: user.id },
    });

    return NextResponse.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    console.error('Resume DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to delete resume' },
      { status: 500 }
    );
  }
}
