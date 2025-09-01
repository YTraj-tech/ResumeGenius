// 'use client';

// import { useState, useEffect } from 'react';
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
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { AlertCircle, CheckCircle, Plus, Trash2, Info, TriangleAlert } from 'lucide-react';

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
//   const [sections, setSections] = useState<CustomSection[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState<'success' | 'error' | 'warning' | 'info'>('info');
//   const [existingSectionsCount, setExistingSectionsCount] = useState(0);
//   const [newSection, setNewSection] = useState<CustomSection>({
//     sectionType: 'INTERNSHIP',
//     organization: '',
//     description: ''
//   });
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const MAX_SECTIONS = 10;

//   // Fetch existing sections on mount
//   useEffect(() => {
//     fetchSections();
//   }, [resumeId, userId]);

//   const fetchSections = async () => {
//     try {
//       const response = await fetch(`/api/resumes/${userId}/sections`);
//       if (response.ok) {
//         const data = await response.json();
//         setExistingSectionsCount(data.sections?.length || 0);
        
//         // Don't set sections from server, only show existing count
//         // Always start with one empty section for new entries
//         if (data.sections?.length === 0) {
//           setSections([{
//             sectionType: 'INTERNSHIP',
//             organization: '',
//             description: ''
//           }]);
//         } else {
//           setSections([]); // Clear any temporary sections
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching sections:', error);
//       setMessage('Error fetching sections');
//       setMessageType('error');
//     }
//   };

//   const addNewSection = () => {
//     const totalSections = sections.length + existingSectionsCount;
    
//     if (totalSections >= MAX_SECTIONS) {
//       setMessage(`Maximum limit of ${MAX_SECTIONS} sections reached!`);
//       setMessageType('error');
//       return;
//     }

//     setSections(prev => [
//       ...prev,
//       newSection
//     ]);
    
//     // Reset the form
//     setNewSection({
//       sectionType: 'INTERNSHIP',
//       organization: '',
//       description: ''
//     });
    
//     setMessage(''); // Clear any previous messages
//     setIsDialogOpen(false); // Close the dialog
//   };

//   const updateNewSection = (field: keyof CustomSection, value: string) => {
//     setNewSection(prev => ({ ...prev, [field]: value }));
//   };

//   const updateSection = (index: number, field: keyof CustomSection, value: string) => {
//     setSections(prev => prev.map((section, i) => 
//       i === index ? { ...section, [field]: value } : section
//     ));
//   };

//   const removeSection = (index: number) => {
//     setSections(prev => prev.filter((_, i) => i !== index));
//   };

//   const saveSections = async () => {
//     // Filter out empty sections (where both organization and description are empty)
//     const nonEmptySections = sections.filter(section => 
//       section.organization.trim() || section.description.trim()
//     );

//     if (nonEmptySections.length === 0) {
//       setMessage('Please fill in at least one section before saving.');
//       setMessageType('error');
//       return;
//     }

//     const totalSections = nonEmptySections.length + existingSectionsCount;
    
//     if (totalSections > MAX_SECTIONS) {
//       setMessage(`You cannot have more than ${MAX_SECTIONS} sections total!`);
//       setMessageType('error');
//       return;
//     }

//     setIsLoading(true);
//     setMessage('');

//     try {
//       const response = await fetch(`/api/resumes/${userId}/sections`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           resumeId,
//           sections: nonEmptySections.filter(section => 
//             section.organization.trim() && section.description.trim()
//           )
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage('Sections saved successfully!');
//         setMessageType('success');
//         // Clear the input fields
//         setSections([]);
//         // Refresh with saved data from server to update count
//         fetchSections();
//       } else {
//         setMessage(data.error || 'Error saving sections');
//         setMessageType('error');
//       }
//     } catch (error) {
//       setMessage('Error saving sections');
//       setMessageType('error');
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const availableSlots = MAX_SECTIONS - (sections.length + existingSectionsCount);
//   const canAddMore = availableSlots > 0;

//   // Helper function to render appropriate alert based on message type
//   const renderAlert = () => {
//     if (!message) return null;
    
//     if (messageType === 'warning') {
//       return (
//         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
//           <div className="flex">
//             <TriangleAlert className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
//             <div>
//               <h3 className="text-sm font-medium text-yellow-800">Notice</h3>
//               <div className="text-sm text-yellow-700 mt-1">
//                 {message}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
    
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
//           <DialogContent className="sm:max-w-[500px]">
//             <DialogHeader>
//               <DialogTitle>Add New Section</DialogTitle>
//               <DialogDescription>
//                 Fill in the details for your new section. Click add when you're done.
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
//                 <Label htmlFor="organization">Organization</Label>
//                 <Input
//                   id="organization"
//                   type="text"
//                   value={newSection.organization}
//                   onChange={(e) => updateNewSection('organization', e.target.value)}
//                   placeholder="e.g., Google, University of XYZ"
//                 />
//               </div>

//               <div className="grid gap-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   value={newSection.description}
//                   onChange={(e) => updateNewSection('description', e.target.value)}
//                   placeholder="Describe your experience, achievement, etc."
//                   rows={3}
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <DialogClose asChild>
//                 <Button variant="outline">Cancel</Button>
//               </DialogClose>
//               <Button 
//                 onClick={addNewSection}
//                 disabled={!newSection.organization.trim() || !newSection.description.trim()}
//               >
//                 Add Section
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {renderAlert()}

//       {!canAddMore && sections.length === 0 && (
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

//       <div className="space-y-4">
//         {sections.map((section, index) => (
//           <Card key={index} className="border rounded-lg p-4 bg-white shadow-sm">
//             <CardHeader className="p-0 pb-4">
//               <div className="flex justify-between items-center">
//                 <CardTitle className="text-lg font-semibold">Section {index + 1}</CardTitle>
//                 <Button 
//                   variant="ghost" 
//                   size="icon" 
//                   disabled={isLoading}
//                   onClick={() => removeSection(index)}
//                 >
//                   <Trash2 className="h-4 w-4 text-destructive" />
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent className="p-0 space-y-4">
//               <div className="grid gap-2">
//                 <Label>Section Type</Label>
//                 <div className="flex items-center p-2 border rounded-md bg-muted/50">
//                   {section.sectionType.charAt(0) + section.sectionType.slice(1).toLowerCase()}
//                 </div>
//               </div>

//               <div className="grid gap-2">
//                 <Label>Organization</Label>
//                 <div className="flex items-center p-2 border rounded-md bg-muted/50">
//                   {section.organization}
//                 </div>
//               </div>

//               <div className="grid gap-2">
//                 <Label>Description</Label>
//                 <div className="flex items-center p-2 border rounded-md bg-muted/50 min-h-[80px]">
//                   {section.description}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {sections.length > 0 && (
//         <div className="mt-6">
//           <Button
//             onClick={saveSections}
//             disabled={isLoading}
//             className="w-full sm:w-auto"
//           >
//             {isLoading ? 'Saving...' : 'Save Sections'}
//           </Button>
//           <p className="text-sm text-muted-foreground mt-2">
//             {sections.length} section{sections.length !== 1 ? 's' : ''} ready to save
//           </p>
//         </div>
//       )}

//       {sections.length === 0 && existingSectionsCount === 0 && (
//         <Card className="text-center py-8">
//           <CardContent>
//             <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//             <p className="text-muted-foreground mb-2">No sections added yet.</p>
//             <p className="text-sm text-muted-foreground mb-4">Click the "Add Section" button to get started.</p>
//             <Badge variant="outline">Maximum {MAX_SECTIONS} sections allowed per user</Badge>
//           </CardContent>
//         </Card>
//       )}

//       {sections.length === 0 && existingSectionsCount > 0 && (
//         <Card className="text-center py-8">
//           <CardContent>
//             <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//             <p className="text-muted-foreground mb-2">You have {existingSectionsCount} saved sections.</p>
//             <p className="text-sm text-muted-foreground mb-4">
//               {canAddMore 
//                 ? `You can add ${availableSlots} more sections.`
//                 : 'You have reached the maximum limit.'
//               }
//             </p>
//             <Button
//               onClick={() => setIsDialogOpen(true)}
//               disabled={!canAddMore}
//               className="mt-4"
//             >
//               <Plus className="h-4 w-4 mr-2" />
//               Add New Section
//             </Button>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { AlertCircle, CheckCircle, Plus, Info } from 'lucide-react';

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
    description: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const MAX_SECTIONS = 10;

  // Fetch existing sections count on mount
  useEffect(() => {
    fetchSectionsCount();
  }, [resumeId, userId]);

  const fetchSectionsCount = async () => {
    try {
      const response = await fetch(`/api/resumes/${userId}/sections`);
      if (response.ok) {
        const data = await response.json();
        setExistingSectionsCount(data.sections?.length || 0);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
      setMessage('Error fetching sections');
      setMessageType('error');
    }
  };

  const updateNewSection = (field: keyof CustomSection, value: string) => {
    setNewSection(prev => ({ ...prev, [field]: value }));
  };

  const saveSection = async () => {
    if (!newSection.organization.trim() || !newSection.description.trim()) {
      setMessage('Please fill in all fields before saving.');
      setMessageType('error');
      return;
    }

    if (existingSectionsCount >= MAX_SECTIONS) {
      setMessage(`Maximum limit of ${MAX_SECTIONS} sections reached!`);
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`/api/resumes/${userId}/sections`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resumeId,
          sections: [newSection]
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Section saved successfully!');
        setMessageType('success');
        
        // Reset the form to empty values
        setNewSection({
          sectionType: 'INTERNSHIP',
          organization: '',
          description: ''
        });
        
        // Refresh the count
        setExistingSectionsCount(prev => prev + 1);
        setIsDialogOpen(false);
      } else {
        setMessage(data.error || 'Error saving section');
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

  const availableSlots = MAX_SECTIONS - existingSectionsCount;
  const canAddMore = availableSlots > 0;

  // Helper function to render appropriate alert based on message type
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Additional Sections</h2>
          <p className="text-sm text-muted-foreground">
            {existingSectionsCount} saved sections • {availableSlots} slots remaining
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              disabled={isLoading || !canAddMore}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Section
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Section</DialogTitle>
              <DialogDescription>
                Fill in the details for your new section. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
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

              <div className="grid gap-2">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  type="text"
                  value={newSection.organization}
                  onChange={(e) => updateNewSection('organization', e.target.value)}
                  placeholder="e.g., Google, University of XYZ"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newSection.description}
                  onChange={(e) => updateNewSection('description', e.target.value)}
                  placeholder="Describe your experience, achievement, etc."
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                onClick={saveSection}
                disabled={isLoading || !newSection.organization.trim() || !newSection.description.trim()}
              >
                {isLoading ? 'Saving...' : 'Save Section'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {renderAlert()}

      {!canAddMore && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <div className="flex">
            <Info className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Limit Reached</h3>
              <div className="text-sm text-yellow-700 mt-1">
                You have reached the maximum limit of {MAX_SECTIONS} sections.
              </div>
            </div>
          </div>
        </div>
      )}

      {existingSectionsCount === 0 && (
        <div className="text-center py-8">
          <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">No sections added yet.</p>
          <p className="text-sm text-muted-foreground">
            Click the "Add Section" button to get started.
          </p>
        </div>
      )}
    </div>
  );
}