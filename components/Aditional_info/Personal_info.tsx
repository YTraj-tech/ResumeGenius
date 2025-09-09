//  components/PersonalInfoForm.tsx
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { createPersonalInfo, updatePersonalInfo, getPersonalInfoByUserId } from '@/app/actions/section';
// import { storage, ID } from '@/lib/appwrite';
// import { BUCKET_ID } from '@/lib/bucketId';

// interface PersonalInfoFormData {
//   phone: string;
//   imageUrl: string;
//   address: string;
// }

// export default function PersonalInfoForm() {
//   const [formData, setFormData] = useState<PersonalInfoFormData>({
//     phone: '',
//     imageUrl: '',
//     address: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
//   const [existingData, setExistingData] = useState<any>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string>('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Fetch existing data on component mount
//   useEffect(() => {
//     fetchPersonalInfo();
//   }, []);


//   useEffect(() => {
//     if (formData.imageUrl) {
//       console.log('Current image URL:', formData.imageUrl);
//       console.log('Is it a preview URL?', formData.imageUrl.includes('/preview?'));
//     }
//   }, [formData.imageUrl]);

//   const fetchPersonalInfo = async () => {
//     try {
//       setLoading(true);
//       const result = await getPersonalInfoByUserId();

//       if (result.success && result.data) {
//         setExistingData(result.data);
//         setFormData({
//           phone: result.data.phone || '',
//           imageUrl: result.data.imageUrl || '',
//           address: result.data.address || ''
//         });
//         if (result.data.imageUrl) {
//           // Fix existing URLs that might be using preview instead of view
//           const fixedImageUrl = result.data.imageUrl.replace('/preview?', '/view?');
//           setImagePreview(fixedImageUrl);
//           setFormData(prev => ({ ...prev, imageUrl: fixedImageUrl }));
//         }
//       }
//     } catch (error) {
//       console.error('Failed to fetch personal info:', error);
//     } finally {
//       setLoading(false);
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
//       // Check if file is an image
//       if (!file.type.startsWith('image/')) {
//         setMessage({ type: 'error', text: 'Please select an image file (JPG, PNG, GIF, WEBP)' });
//         return;
//       }

//       // Check file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         setMessage({ type: 'error', text: 'Image size must be less than 5MB' });
//         return;
//       }

//       setSelectedFile(file);

//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);

//       // Clear any previous messages
//       setMessage(null);
//     }
//   };



//   const uploadImage = async (file: File): Promise<string> => {
//     setUploading(true);
//     try {
//       // Upload the file to Appwrite storage
//       const result = await storage.createFile(
//         BUCKET_ID,
//         ID.unique(),
//         file
//       );

//       // Construct the public file URL (no token needed if bucket is public)
//       const fileUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${result.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;

//       return fileUrl;
//     } catch (error: any) {
//       console.error('Appwrite upload error:', error);
//       throw new Error(error.message || 'Failed to upload image');
//     } finally {
//       setUploading(false);
//     }
//   };


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       let imageUrl = formData.imageUrl;

//       // Upload new image if selected
//       if (selectedFile) {
//         try {
//           imageUrl = await uploadImage(selectedFile);
//           setFormData(prev => ({ ...prev, imageUrl }));
//         } catch (error) {
//           setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to upload image. Please try again.' });
//           setLoading(false);
//           return;
//         }
//       }

//       let result;
//       const submitData = {
//         phone: formData.phone,
//         imageUrl: imageUrl,
//         address: formData.address
//       };

//       if (existingData) {
//         result = await updatePersonalInfo(submitData);
//       } else {
//         result = await createPersonalInfo(submitData);
//       }

//       if (result.success) {
//         setMessage({
//           type: 'success',
//           text: result.message || (existingData ? 'Personal info updated successfully!' : 'Personal info created successfully!')
//         });
//         setExistingData(result.data);
//         setSelectedFile(null);

//         setTimeout(() => setMessage(null), 3000);
//       } else {
//         setMessage({ type: 'error', text: result.error || 'Something went wrong!' });
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'Failed to save personal information' });
//       console.error('Save error:', error);
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

//   if (loading && !existingData) {
//     return (
//       <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//         <div className="animate-pulse">
//           <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
//           <div className="space-y-3">
//             <div className="h-10 bg-gray-200 rounded"></div>
//             <div className="h-10 bg-gray-200 rounded"></div>
//             <div className="h-20 bg-gray-200 rounded"></div>
//             <div className="h-10 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">
//         {existingData ? 'Update Personal Information' : 'Add Personal Information'}
//       </h2>

//       {message && (
//         <div className={`p-3 rounded-md mb-4 ${message.type === 'success'
//           ? 'bg-green-100 text-green-800 border border-green-200'
//           : 'bg-red-100 text-red-800 border border-red-200'
//           }`}>
//           {message.text}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
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
//           />
//         </div>

//         <div>
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
//             Profile Image
//           </label>
//           <div className="flex items-center justify-center w-full">
//             <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                 <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
//                 </svg>
//                 <p className="mb-2 text-sm text-gray-500">
//                   <span className="font-semibold">Click to upload</span> or drag and drop
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   PNG, JPG, GIF, WEBP (MAX. 5MB)
//                 </p>
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
//             <div className="w-32 h-32 border rounded-md overflow-hidden relative group">
//               <img
//                 src={imagePreview || formData.imageUrl}
//                 alt="Profile preview"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   // Fallback to placeholder if image fails to load
//                   e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjUiIGZpbGw9IiNlNWU3ZWIiLz48dGV4dCB4PSIzMCIgeT0iMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiIGZvbnQtc2l6ZT0iMTQiPlByb2ZpbGU8L3RleHQ+PC9zdmc+';
//                 }}
//               />
//               <button
//                 type="button"
//                 onClick={removeImage}
//                 className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100"
//                 title="Remove image"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
//           />
//         </div>

//         <div className="flex gap-3 pt-4">
//           <button
//             type="submit"
//             disabled={loading || uploading}
//             className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             {uploading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Uploading...
//               </>
//             ) : loading ? 'Saving...' : existingData ? 'Update Information' : 'Save Information'}
//           </button>

//           <button
//             type="button"
//             onClick={handleClear}
//             disabled={loading || uploading}
//             className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             Clear
//           </button>
//         </div>
//       </form>

//       {existingData && (
//         <div className="mt-6 p-4 bg-gray-50 rounded-md">
//           <h3 className="font-semibold text-gray-800 mb-2">Current Information</h3>
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



// components/PersonalInfoForm.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { createPersonalInfo, updatePersonalInfo, getPersonalInfoByUserId } from '@/app/actions/section';
import { storage, ID } from '@/lib/appwrite';
import { BUCKET_ID } from '@/lib/bucketId';

interface PersonalInfoFormData {
  phone: string;
  imageUrl: string;
  address: string;
}

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState<PersonalInfoFormData>({
    phone: '',
    imageUrl: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [existingData, setExistingData] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch existing data on component mount
  useEffect(() => {
    fetchPersonalInfo();
  }, []);

  useEffect(() => {
    if (formData.imageUrl) {
      console.log('Current image URL:', formData.imageUrl);
      console.log('Is it a preview URL?', formData.imageUrl.includes('/preview?'));
    }
  }, [formData.imageUrl]);

  const fetchPersonalInfo = async () => {
    try {
      setLoading(true);
      const result = await getPersonalInfoByUserId();

      if (result.success && result.data) {
        setExistingData(result.data);
        setFormData({
          phone: result.data.phone || '',
          imageUrl: result.data.imageUrl || '',
          address: result.data.address || ''
        });
        if (result.data.imageUrl) {
          // Fix existing URLs that might be using preview instead of view
          const fixedImageUrl = result.data.imageUrl.replace('/preview?', '/view?');
          setImagePreview(fixedImageUrl);
          setFormData(prev => ({ ...prev, imageUrl: fixedImageUrl }));
        }
      }
    } catch (error) {
      console.error('Failed to fetch personal info:', error);
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
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        setMessage({ type: 'error', text: 'Please select an image file (JPG, PNG, GIF, WEBP)' });
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Image size must be less than 5MB' });
        return;
      }

      setSelectedFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Clear any previous messages
      setMessage(null);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    setUploading(true);
    try {
      // Upload the file to Appwrite storage
      const result = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        file
      );

      // Construct the public file URL (no token needed if bucket is public)
      const fileUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${result.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;

      return fileUrl;
    } catch (error: any) {
      console.error('Appwrite upload error:', error);
      throw new Error(error.message || 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      let imageUrl = formData.imageUrl;

      // Upload new image if selected
      if (selectedFile) {
        try {
          imageUrl = await uploadImage(selectedFile);
          setFormData(prev => ({ ...prev, imageUrl }));
        } catch (error) {
          setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to upload image. Please try again.' });
          setLoading(false);
          return;
        }
      }

      let result;
      const submitData = {
        phone: formData.phone,
        imageUrl: imageUrl,
        address: formData.address
      };

      if (existingData) {
        result = await updatePersonalInfo(submitData);
      } else {
        result = await createPersonalInfo(submitData);
      }

      if (result.success) {
        setMessage({
          type: 'success',
          text: result.message || (existingData ? 'Personal info updated successfully!' : 'Personal info created successfully!')
        });
        setExistingData(result.data);
        setSelectedFile(null);

        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save personal information' });
      console.error('Save error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      phone: '',
      imageUrl: '',
      address: ''
    });
    setSelectedFile(null);
    setImagePreview('');
    setMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview('');
    setFormData(prev => ({ ...prev, imageUrl: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setMessage(null);
  };

  if (loading && !existingData) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-20 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4 ">
      {message && (
        <div className={`p-3 rounded-md text-sm ${message.type === 'success'
          ? 'bg-green-100 text-green-800 border border-green-200'
          : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
          {message.text}
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
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
                disabled={uploading}
              />
            </label>
          </div>

          {selectedFile && (
            <p className="text-sm text-green-600 mt-2">
              Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        {(imagePreview || formData.imageUrl) && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
            <div className="w-24 h-24 border rounded-md overflow-hidden relative group">
              <img
                src={imagePreview || formData.imageUrl}
                alt="Profile preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjUiIGZpbGw9IiNlNWU3ZWIiLz48dGV4dCB4PSIzMCIgeT0iMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiIGZvbnQtc2l6ZT0iMTQiPlByb2ZpbGU8L3RleHQ+PC9zdmc+';
                }}
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100"
                title="Remove image"
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
          />
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={loading || uploading}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            {uploading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
              </>
            ) : loading ? 'Saving...' : existingData ? 'Update' : 'Save'}
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={loading || uploading}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            Clear
          </button>
        </div>
      </form>

    
    </div>
  );
}