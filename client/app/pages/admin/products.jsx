import ProductImageUpload from '@/components/admin/image-upload';
import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { addProductFormElements } from '@/config';
import React, { useState } from 'react'
const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: '',
  salePrice: "",
  totalStock: ""
}

const AdminProducts = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("")
  function onSubmit() {

  }
  return (
    <>
      <div className='mb-5 flex justify-end'>
        <Button onClick={() => setOpenCreateDialog(true)}>Add New Product</Button>
      </div>
      <div className='gap-4 grid md:grid-cols-3 lg:grid-cols-4'></div>
      <Sheet open={openCreateDialog} onOpenChange={() => {setOpenCreateDialog(false) }}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
          />
          <div className='py-6'>
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AdminProducts;