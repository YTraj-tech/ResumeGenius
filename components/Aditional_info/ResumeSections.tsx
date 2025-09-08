// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogClose,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { AlertCircle, CheckCircle, Plus, Info, X, Loader2 } from 'lucide-react';
// import { createResumeSection, getSectionsCount } from '@/app/actions/resumeSection';
// import PersonalInfoForm from './Personal_info';
// interface CustomSection {
//   id?: string;
//   sectionType: 'INTERNSHIP' | 'ACHIEVEMENT' | 'AWARD' | 'PUBLICATION';
//   organization: string;
//   description: string;
// }

// interface ResumeSectionsProps {
//   resumeId: string;
//   userId: string;
// }

// export default function ResumeSections({ resumeId, userId }: ResumeSectionsProps) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
//   const [existingSectionsCount, setExistingSectionsCount] = useState(0);
//   const [newSection, setNewSection] = useState<CustomSection>({
//     sectionType: 'INTERNSHIP',
//     organization: '',
//     description: '',
//   });
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const MAX_SECTIONS = 10;

//   // Fetch existing sections count on component mount
//   useEffect(() => {
//     const fetchSectionsCount = async () => {
//       try {
//         const result = await getSectionsCount(resumeId);
//         if (result.success) {
//           setExistingSectionsCount(result.count);
//         }
//       } catch (error) {
//         console.error('Error fetching sections count:', error);
//       }
//     };

//     fetchSectionsCount();
//   }, [resumeId]);

//   const updateNewSection = (field: keyof CustomSection, value: string) => {
//     setNewSection(prev => ({ ...prev, [field]: value }));
//   };

//   const saveSection = async () => {
//     if (existingSectionsCount >= MAX_SECTIONS) {
//       setMessage(`Maximum limit of ${MAX_SECTIONS} sections reached!`);
//       setMessageType('error');
//       return;
//     }

//     setIsLoading(true);
//     setMessage('');

//     try {
//       // Create FormData for server action
//       const formData = new FormData();
//       formData.append('resumeId', resumeId);
//       formData.append('userId', userId);
//       formData.append('sectionType', newSection.sectionType);
//       formData.append('organization', newSection.organization.trim());
//       formData.append('description', newSection.description.trim());

//       const result = await createResumeSection(formData);

//       if (result.success) {
//         setMessage(result.message || 'Section saved successfully!');
//         setMessageType('success');

//         // Reset the form to empty values
//         setNewSection({
//           sectionType: 'INTERNSHIP',
//           organization: '',
//           description: '',
//         });

//         // Refresh the count
//         setExistingSectionsCount(prev => prev + 1);
//         setIsDialogOpen(false);
//       } else {
//         setMessage(result.error || 'Error saving section');
//         setMessageType('error');
//       }
//     } catch (error) {
//       setMessage('Error saving section');
//       setMessageType('error');
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const canAddMore = existingSectionsCount < MAX_SECTIONS;
//   const availableSlots = MAX_SECTIONS - existingSectionsCount;

//   // Helper function to render appropriate alert based on message type
//   const renderAlert = () => {
//     if (!message) return null;

//     return (
//       <Alert variant={messageType === 'error' ? "destructive" : "default"} className="mb-4">
//         {messageType === 'error' ? (
//           <AlertCircle className="h-4 w-4" />
//         ) : (
//           <CheckCircle className="h-4 w-4" />
//         )}
//         <AlertTitle>
//           {messageType === 'error' ? 'Error' : 'Success'}
//         </AlertTitle>
//         <AlertDescription>
//           {message}
//         </AlertDescription>
//       </Alert>
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-bold tracking-tight">Additional Sections</h2>
//           <p className="text-sm text-muted-foreground">
//             {existingSectionsCount} saved sections • {availableSlots} slots remaining
//           </p>
//         </div>

//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button
//               disabled={isLoading || !canAddMore}
//               className="flex items-center gap-2"
//             >
//               <Plus className="h-4 w-4" />
//               Add Section
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
//             <DialogHeader>
//               <DialogTitle>Add New Section</DialogTitle>
//               <DialogDescription>
//                 Fill in the details for your new section. Click save when you're done.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="sectionType">Section Type</Label>
//                 <Select
//                   value={newSection.sectionType}
//                   onValueChange={(value) => updateNewSection('sectionType', value as any)}
//                 >
//                   <SelectTrigger id="sectionType">
//                     <SelectValue placeholder="Select section type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="INTERNSHIP">Internship</SelectItem>
//                     <SelectItem value="ACHIEVEMENT">Achievement</SelectItem>
//                     <SelectItem value="AWARD">Award</SelectItem>
//                     <SelectItem value="PUBLICATION">Publication</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="grid gap-2">
//                 <Label htmlFor="organization">Organization *</Label>
//                 <Input
//                   id="organization"
//                   type="text"
//                   value={newSection.organization}
//                   onChange={(e) => updateNewSection('organization', e.target.value)}
//                   placeholder="e.g., Google, University of XYZ"
//                   required
//                 />
//               </div>

//               <div className="grid gap-2">
//                 <Label htmlFor="description">Description *</Label>
//                 <Textarea
//                   id="description"
//                   value={newSection.description}
//                   onChange={(e) => updateNewSection('description', e.target.value)}
//                   placeholder="Describe your experience, achievement, etc."
//                   rows={3}
//                   required
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <DialogClose asChild>
//                 <Button variant="outline">Cancel</Button>
//               </DialogClose>
//               <Button
//                 onClick={saveSection}
//                 disabled={
//                   isLoading ||
//                   !newSection.organization.trim() ||
//                   !newSection.description.trim()
//                 }
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Saving...
//                   </>
//                 ) : (
//                   'Save Section'
//                 )}
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {renderAlert()}

//       {!canAddMore && (
//         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
//           <div className="flex">
//             <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
//             <div>
//               <h3 className="text-sm font-medium text-yellow-800">Limit Reached</h3>
//               <div className="text-sm text-yellow-700 mt-1">
//                 You have reached the maximum limit of {MAX_SECTIONS} sections.
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {existingSectionsCount === 0 && (
//         <div className="text-center py-8">
//           <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//           <p className="text-muted-foreground mb-2">No sections added yet.</p>
//           <p className="text-sm text-muted-foreground">
//             Click the "Add Section" button to get started.
//           </p>
//         </div>
//       )}
//       <PersonalInfoForm/>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Info, Loader2 } from 'lucide-react';
import { createResumeSection, getSectionsCount } from '@/app/actions/resumeSection';

interface CustomSection {
  id?: string;
  sectionType: 'INTERNSHIP' | 'ACHIEVEMENT' | 'AWARD' | 'PUBLICATION';
  organization: string;
  description: string;
}

interface ResumeSectionsProps {
  resumeId: string;
  userId: string;
}

export default function ResumeSections({ resumeId, userId }: ResumeSectionsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [existingSectionsCount, setExistingSectionsCount] = useState(0);
  const [newSection, setNewSection] = useState<CustomSection>({
    sectionType: 'INTERNSHIP',
    organization: '',
    description: '',
  });
  const MAX_SECTIONS = 10;

  useEffect(() => {
    const fetchSectionsCount = async () => {
      try {
        const result = await getSectionsCount(resumeId);
        if (result.success) {
          setExistingSectionsCount(result.count);
        }
      } catch (error) {
        console.error('Error fetching sections count:', error);
      }
    };

    fetchSectionsCount();
  }, [resumeId]);

  const updateNewSection = (field: keyof CustomSection, value: string) => {
    setNewSection(prev => ({ ...prev, [field]: value }));
  };

  const saveSection = async () => {
    if (existingSectionsCount >= MAX_SECTIONS) {
      setMessage(`Maximum limit of ${MAX_SECTIONS} sections reached!`);
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('resumeId', resumeId);
      formData.append('userId', userId);
      formData.append('sectionType', newSection.sectionType);
      formData.append('organization', newSection.organization.trim());
      formData.append('description', newSection.description.trim());

      const result = await createResumeSection(formData);

      if (result.success) {
        setMessage(result.message || 'Section saved successfully!');
        setMessageType('success');
        setNewSection({
          sectionType: 'INTERNSHIP',
          organization: '',
          description: '',
        });
        setExistingSectionsCount(prev => prev + 1);
      } else {
        setMessage(result.error || 'Error saving section');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Error saving section');
      setMessageType('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const canAddMore = existingSectionsCount < MAX_SECTIONS;
  const availableSlots = MAX_SECTIONS - existingSectionsCount;

  const renderAlert = () => {
    if (!message) return null;

    return (
      <Alert variant={messageType === 'error' ? "destructive" : "default"} className="mb-4">
        {messageType === 'error' ? (
          <AlertCircle className="h-4 w-4" />
        ) : (
          <CheckCircle className="h-4 w-4" />
        )}
        <AlertTitle>
          {messageType === 'error' ? 'Error' : 'Success'}
        </AlertTitle>
        <AlertDescription>
          {message}
        </AlertDescription>
      </Alert>
    );
  };

  return (
    <div className="space-y-4">
      {renderAlert()}

      {!canAddMore && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex">
            <Info className="h-4 w-4 text-yellow-600 mr-2 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Limit Reached</h3>
              <div className="text-xs text-yellow-700 mt-1">
                Maximum {MAX_SECTIONS} sections allowed.
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-sm text-muted-foreground mb-2">
        {existingSectionsCount} saved • {availableSlots} remaining
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <Label htmlFor="sectionType">Section Type</Label>
          <Select
            value={newSection.sectionType}
            onValueChange={(value) => updateNewSection('sectionType', value as any)}
          >
            <SelectTrigger id="sectionType">
              <SelectValue placeholder="Select section type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="INTERNSHIP">Internship</SelectItem>
              <SelectItem value="ACHIEVEMENT">Achievement</SelectItem>
              <SelectItem value="AWARD">Award</SelectItem>
              <SelectItem value="PUBLICATION">Publication</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organization *</Label>
          <Input
            id="organization"
            type="text"
            value={newSection.organization}
            onChange={(e) => updateNewSection('organization', e.target.value)}
            placeholder="e.g., Google, University of XYZ"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            value={newSection.description}
            onChange={(e) => updateNewSection('description', e.target.value)}
            placeholder="Describe your experience, achievement, etc."
            rows={3}
            required
          />
        </div>

        <Button
          onClick={saveSection}
          disabled={
            isLoading ||
            !newSection.organization.trim() ||
            !newSection.description.trim() ||
            !canAddMore
          }
          className="w-full"
          size="sm"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Add Section'
          )}
        </Button>
      </div>

      {existingSectionsCount === 0 && (
        <div className="text-center py-4 border rounded-lg">
          <Info className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            No sections added yet.
          </p>
        </div>
      )}
    </div>
  );
}