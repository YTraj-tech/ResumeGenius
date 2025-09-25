


// // app/components/PersonalInfoForm.tsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { storage, ID } from '@/lib/appwrite';
// import { BUCKET_ID } from '@/lib/bucketId';
// import { useAuth, useUser } from '@clerk/nextjs';

// interface PersonalInfoFormData {
//   phone: string;
//   imageUrl: string;
//   address: string;
// }
// process
// interface ApiResponse<T = any> {
//   success: boolean;
//   message?: string;
//   data?: T;
//   error?: string;
//   statusCode?: number;
// }

// export default function PersonalInfoForm() {
//   const [formData, setFormData] = useState<PersonalInfoFormData>({
//     phone: '',
//     imageUrl: '',
//     address: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
//   const [existingData, setExistingData] = useState<any>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string>('');
//   const [authDebug, setAuthDebug] = useState<any>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
  
//   const { isSignedIn, isLoaded } = useAuth();
//   const { user } = useUser();

//   // API call functions
//   const apiCall = async (url: string, options: RequestInit = {}) => {
//     const response = await fetch(url, {
//       headers: {
//         'Content-Type': 'application/json',
//         ...options.headers,
//       },
//       ...options,
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     return response.json();
//   };

//   const testAuth = async (): Promise<ApiResponse> => {
//     return apiCall('/api/auth/test');
//   };

//   const getPersonalInfo = async (): Promise<ApiResponse> => {
//     return apiCall('/api/personal-info');
//   };

//   const createPersonalInfo = async (data: any): Promise<ApiResponse> => {
//     return apiCall('/api/personal-info', {
//       method: 'POST',
//       body: JSON.stringify(data),
//     });
//   };

//   const updatePersonalInfo = async (data: any): Promise<ApiResponse> => {
//     return apiCall('/api/personal-info', {
//       method: 'PUT',
//       body: JSON.stringify(data),
//     });
//   };

//   // Check auth status and fetch existing data on component mount
//   useEffect(() => {
//     if (isLoaded) {
//       if (isSignedIn && user) {
//         console.log('User is signed in:', user.id);
//         initializeUserAndFetchData();
//       } else {
//         console.log('User is not signed in or not loaded');
//         setMessage({ type: 'error', text: 'Please sign in to continue.' });
//       }
//     }
//   }, [isSignedIn, isLoaded, user]);

//   const initializeUserAndFetchData = async () => {
//     try {
//       setLoading(true);
//       setMessage({ type: 'info', text: 'Initializing user session...' });

//       // First, run detailed auth test
//       const authTest = await testAuth();
//       console.log('Detailed auth test result:', authTest);
//       setAuthDebug(authTest.data);

//       if (!authTest.success) {
//         setMessage({ type: 'error', text: 'Authentication test failed. Please refresh the page.' });
//         return;
//       }

//       // Now fetch personal info
//       await fetchPersonalInfo();

//     } catch (error) {
//       console.error('Initialize error:', error);
//       setMessage({ type: 'error', text: 'Failed to initialize. Please refresh the page.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPersonalInfo = async () => {
//     try {
//       console.log('Fetching personal info...');
      
//       const result = await getPersonalInfo();
//       console.log('Fetch result:', result);

//       if (result.success && result.data) {
//         setExistingData(result.data);
//         setFormData({
//           phone: result.data.phone || '',
//           imageUrl: result.data.imageUrl || '',
//           address: result.data.address || ''
//         });
//         if (result.data.imageUrl) {
//           const fixedImageUrl = result.data.imageUrl.replace('/preview?', '/view?');
//           setImagePreview(fixedImageUrl);
//           setFormData(prev => ({ ...prev, imageUrl: fixedImageUrl }));
//         }
//         setMessage({ type: 'success', text: 'Personal info loaded successfully.' });
//       } else if (result.statusCode === 404) {
//         // No existing data - this is normal for new users
//         setMessage({ type: 'info', text: 'No existing personal info found. You can create it now.' });
//       } else if (result.error) {
//         setMessage({ type: 'error', text: result.error });
//       }
//     } catch (error) {
//       console.error('Failed to fetch personal info:', error);
//       setMessage({ type: 'error', text: 'Network error: Failed to fetch data. Please check your connection.' });
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (!file.type.startsWith('image/')) {
//         setMessage({ type: 'error', text: 'Please select an image file (JPG, PNG, GIF, WEBP)' });
//         return;
//       }

//       if (file.size > 5 * 1024 * 1024) {
//         setMessage({ type: 'error', text: 'Image size must be less than 5MB' });
//         return;
//       }

//       setSelectedFile(file);

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);

//       setMessage(null);
//     }
//   };

//   const uploadImage = async (file: File): Promise<string> => {
//     setUploading(true);
//     try {
//       console.log('Uploading image:', file.name);
      
//       if (!file.type.startsWith('image/')) {
//         throw new Error('Please select an image file');
//       }

//       if (file.size > 5 * 1024 * 1024) {
//         throw new Error('Image size must be less than 5MB');
//       }

//       const result = await storage.createFile(
//         BUCKET_ID,
//         ID.unique(),
//         file
//       );

//       console.log('Upload result:', result);

//       const fileUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${result.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
      
//       console.log('Generated file URL:', fileUrl);
//       return fileUrl;
//     } catch (error: any) {
//       console.error('Appwrite upload error:', error);
      
//       if (error.code === 401) {
//         throw new Error('Authentication failed. Please check your Appwrite configuration.');
//       } else if (error.code === 404) {
//         throw new Error('Storage bucket not found. Please check your bucket ID.');
//       } else if (error.code === 413) {
//         throw new Error('File too large. Please select a smaller image.');
//       } else {
//         throw new Error(error.message || 'Failed to upload image. Please check your connection and try again.');
//       }
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!isSignedIn) {
//       setMessage({ type: 'error', text: 'Please sign in to save personal information.' });
//       return;
//     }

//     setLoading(true);
//     setMessage({ type: 'info', text: 'Saving personal information...' });

//     try {
//       let imageUrl = formData.imageUrl;

//       if (selectedFile) {
//         try {
//           imageUrl = await uploadImage(selectedFile);
//           setFormData(prev => ({ ...prev, imageUrl }));
//         } catch (error) {
//           setMessage({ 
//             type: 'error', 
//             text: error instanceof Error ? error.message : 'Failed to upload image. Please try again.' 
//           });
//           setLoading(false);
//           return;
//         }
//       }

//       console.log('Submitting data:', { ...formData, imageUrl });
      
//       let result;
//       const submitData = {
//         phone: formData.phone || undefined,
//         imageUrl: imageUrl || undefined,
//         address: formData.address || undefined
//       };

//       if (existingData) {
//         result = await updatePersonalInfo(submitData);
//       } else {
//         result = await createPersonalInfo(submitData);
//       }

//       console.log('API result:', result);

//       if (result.success) {
//         setMessage({
//           type: 'success',
//           text: result.message || (existingData ? 'Personal info updated successfully!' : 'Personal info created successfully!')
//         });
//         setExistingData(result.data);
//         setSelectedFile(null);
        
//         setTimeout(async () => {
//           await fetchPersonalInfo();
//         }, 1000);
        
//         setTimeout(() => {
//           if (message?.type === 'success') setMessage(null);
//         }, 5000);
//       } else {
//         setMessage({ 
//           type: 'error', 
//           text: result.error || 'Something went wrong!' 
//         });
//       }
//     } catch (error) {
//       console.error('Submit error:', error);
//       setMessage({ 
//         type: 'error', 
//         text: 'Network error: Failed to save personal information. Please check your connection and try again.' 
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       phone: '',
//       imageUrl: '',
//       address: ''
//     });
//     setSelectedFile(null);
//     setImagePreview('');
//     setMessage(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const removeImage = () => {
//     setSelectedFile(null);
//     setImagePreview('');
//     setFormData(prev => ({ ...prev, imageUrl: '' }));
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//     setMessage(null);
//   };

//   const retryInitialization = async () => {
//     await initializeUserAndFetchData();
//   };

//   // Show loading while Clerk is loading
//   if (!isLoaded) {
//     return (
//       <div className="text-center p-8">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
//         <p className="mt-2 text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   // Show sign in message if not authenticated
//   if (!isSignedIn) {
//     return (
//       <div className="text-center p-8">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p>Please sign in to manage your personal information.</p>
//         </div>
//       </div>
//     );
//   }

//   // Show loading skeleton during initial load
//   if (loading && !existingData && !message) {
//     return (
//       <div className="animate-pulse space-y-4">
//         <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//         <div className="h-10 bg-gray-200 rounded"></div>
//         <div className="h-10 bg-gray-200 rounded"></div>
//         <div className="h-20 bg-gray-200 rounded"></div>
//         <div className="h-10 bg-gray-200 rounded"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {/* Debug info - remove in production */}
//       {process.env.NODE_ENV === 'development' && authDebug && (
//         <div className="bg-gray-100 p-3 rounded text-xs">
//           <details>
//             <summary className="cursor-pointer font-semibold">Debug Info</summary>
//             <pre className="mt-2 overflow-auto">{JSON.stringify(authDebug, null, 2)}</pre>
//           </details>
//         </div>
//       )}

//       {message && (
//         <div className={`p-3 rounded-md text-sm ${
//           message.type === 'success'
//             ? 'bg-green-100 text-green-800 border border-green-200'
//             : message.type === 'info'
//             ? 'bg-blue-100 text-blue-800 border border-blue-200'
//             : 'bg-red-100 text-red-800 border border-red-200'
//         }`}>
//           <div className="flex justify-between items-center">
//             <span>{message.text}</span>
//             {message.type === 'error' && (
//               <button
//                 onClick={retryInitialization}
//                 className="ml-3 text-xs bg-red-200 hover:bg-red-300 px-2 py-1 rounded"
//                 disabled={loading}
//               >
//                 Retry
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Form fields remain the same */}
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             placeholder="Enter your phone number"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             disabled={loading || uploading}
//           />
//         </div>

//         <div>
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
//             Profile Image
//           </label>
//           <div className="flex items-center justify-center w-full">
//             <label htmlFor="image" className={`flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer ${
//               uploading ? 'bg-gray-100 border-gray-300' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
//             }`}>
//               <div className="flex flex-col items-center justify-center pt-3 pb-3">
//                 <svg className="w-6 h-6 mb-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
//                 </svg>
//                 <p className="text-xs text-gray-500">
//                   <span className="font-semibold">Click to upload</span>
//                 </p>
//                 <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
//               </div>
//               <input
//                 ref={fileInputRef}
//                 id="image"
//                 type="file"
//                 accept="image/jpeg,image/png,image/gif,image/webp"
//                 onChange={handleFileSelect}
//                 className="hidden"
//                 disabled={uploading}
//               />
//             </label>
//           </div>

//           {selectedFile && (
//             <p className="text-sm text-green-600 mt-2">
//               Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
//             </p>
//           )}
//         </div>

//         {(imagePreview || formData.imageUrl) && (
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
//             <div className="w-24 h-24 border rounded-md overflow-hidden relative group">
//               <img
//                 src={imagePreview || formData.imageUrl}
//                 alt="Profile preview"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjUiIGZpbGw9IiNlNWU3ZWIiLz48dGV4dCB4PSIzMCIgeT0iMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiIGZvbnQtc2l6ZT0iMTQiPlByb2ZpbGU8L3RleHQ+PC9zdmc+';
//                 }}
//               />
//               <button
//                 type="button"
//                 onClick={removeImage}
//                 className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100"
//                 title="Remove image"
//                 disabled={loading || uploading}
//               >
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         )}

//         <div>
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//             Address
//           </label>
//           <textarea
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             placeholder="Enter your full address"
//             rows={3}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//             disabled={loading || uploading}
//           />
//         </div>

//         <div className="flex gap-2 pt-2">
//           <button
//             type="submit"
//             disabled={loading || uploading}
//             className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
//           >
//             {uploading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Uploading...
//               </>
//             ) : loading ? 'Saving...' : existingData ? 'Update' : 'Save'}
//           </button>

//           <button
//             type="button"
//             onClick={handleClear}
//             disabled={loading || uploading}
//             className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
//           >
//             Clear
//           </button>  
//         </div>
//       </form>

//       {existingData && (
//         <div className="mt-6 p-4 bg-gray-50 rounded-md">
//           <h3 className="font-semibold text-gray-800 mb-2 text-sm">Current Information</h3>
//           <div className="text-sm text-gray-600 space-y-1">
//             {existingData.phone && <p>📞 Phone: {existingData.phone}</p>}
//             {existingData.address && <p>🏠 Address: {existingData.address}</p>}
//             {existingData.imageUrl && (
//               <p>🖼️ Image: <a href={existingData.imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Image</a></p>
//             )}
//             <p className="text-xs text-gray-400 mt-2">
//               Last updated: {new Date(existingData.updatedAt).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// app/components/PersonalInfoForm.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { createOrUpdatePersonalInfo, getPersonalInfo, deleteImage } from '@/app/actions/Persnal_info';

interface PersonalInfoFormData {
  phone: string;
  address: string;
}

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState<PersonalInfoFormData>({
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [existingData, setExistingData] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  // Fetch existing data on component mount
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      initializeUserAndFetchData();
    }
  }, [isSignedIn, isLoaded, user]);

  const initializeUserAndFetchData = async () => {
    try {
      setLoading(true);
      
      const result = await getPersonalInfo();
      
      if (result.success) {
        if (result.data) {
          setExistingData(result.data);
          setFormData({
            phone: result.data.phone || '',
            address: result.data.address || ''
          });
          if (result.data.imageUrl) {
            setImagePreview(result.data.imageUrl);
          }
        }
      } else if (result.error) {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (error) {
      console.error('Initialize error:', error);
      setMessage({ type: 'error', text: 'Failed to load personal information' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setMessage({ type: 'error', text: 'Please select an image file (JPG, PNG, GIF, WEBP)' });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Image size must be less than 5MB' });
        return;
      }

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      setMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isSignedIn) {
      setMessage({ type: 'error', text: 'Please sign in to save personal information.' });
      return;
    }

    setLoading(true);
    setMessage({ type: 'info', text: 'Saving personal information...' });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      
      if (selectedFile) {
        formDataToSend.append('image', selectedFile);
      }

      const result = await createOrUpdatePersonalInfo(formDataToSend);

      if (result.success) {
        setMessage({
          type: 'success',
          text: result.message || 'Personal info saved successfully!'
        });
        setExistingData(result.data);
        setSelectedFile(null);
        
        // Refresh data
        setTimeout(async () => {
          await initializeUserAndFetchData();
        }, 1000);
      } else {
        setMessage({ 
          type: 'error', 
          text: result.error || 'Something went wrong!' 
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Failed to save personal information. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = async () => {
    if (!isSignedIn) return;

    setLoading(true);
    try {
      const result = await deleteImage();
      
      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Image removed successfully!' });
        setImagePreview('');
        setSelectedFile(null);
        await initializeUserAndFetchData();
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to remove image' });
      }
    } catch (error) {
      console.error('Remove image error:', error);
      setMessage({ type: 'error', text: 'Failed to remove image' });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      phone: '',
      address: ''
    });
    setSelectedFile(null);
    setImagePreview('');
    setMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const retryInitialization = async () => {
    await initializeUserAndFetchData();
  };

  // Show loading while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading...</p>
      </div>
    );
  }

  // Show sign in message if not authenticated
  if (!isSignedIn) {
    return (
      <div className="text-center p-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>Please sign in to manage your personal information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {message && (
        <div className={`p-3 rounded-md text-sm ${
          message.type === 'success'
            ? 'bg-green-100 text-green-800 border border-green-200'
            : message.type === 'info'
            ? 'bg-blue-100 text-blue-800 border border-blue-200'
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          <div className="flex justify-between items-center">
            <span>{message.text}</span>
            {message.type === 'error' && (
              <button
                onClick={retryInitialization}
                className="ml-3 text-xs bg-red-200 hover:bg-red-300 px-2 py-1 rounded"
                disabled={loading}
              >
                Retry
              </button>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="image" className={`flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer ${
              loading ? 'bg-gray-100 border-gray-300' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
            }`}>
              <div className="flex flex-col items-center justify-center pt-3 pb-3">
                <svg className="w-6 h-6 mb-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
              </div>
              <input
                ref={fileInputRef}
                id="image"
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                onChange={handleFileSelect}
                className="hidden"
                disabled={loading}
              />
            </label>
          </div>

          {selectedFile && (
            <p className="text-sm text-green-600 mt-2">
              Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        {(imagePreview || existingData?.imageUrl) && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
            <div className="w-24 h-24 border rounded-md overflow-hidden relative group">
              <img
                src={imagePreview || existingData.imageUrl}
                alt="Profile preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjUiIGZpbGw9IiNlNWU3ZWIiLz48dGV4dCB4PSIzMCIgeT0iMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiIGZvbnQtc2l6ZT0iMTQiPlByb2ZpbGU8L3RleHQ+PC9zdmc+';
                }}
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100"
                title="Remove image"
                disabled={loading}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your full address"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={loading}
          />
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : existingData ? 'Update' : 'Save'}
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={loading}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Clear
          </button>  
        </div>
      </form>

      {existingData && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2 text-sm">Current Information</h3>
          <div className="text-sm text-gray-600 space-y-1">
            {existingData.phone && <p>📞 Phone: {existingData.phone}</p>}
            {existingData.address && <p>🏠 Address: {existingData.address}</p>}
            {existingData.imageUrl && (
              <p>🖼️ Image: <a href={existingData.imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Image</a></p>
            )}
            <p className="text-xs text-gray-400 mt-2">
              Last updated: {new Date(existingData.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}