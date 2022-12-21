import React from 'react'
import { Modal, Label, TextInput, Checkbox,Button  } from 'flowbite-react'

const MyForm = () => {
  return (
    <div className="flex flex-col gap-4 w-[100%]">
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Agregar producto
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Marca"
              value="Marca"
            />
          </div>
          <TextInput
            id="Marca"
            placeholder="eje: Samsung"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Marca"
              value="Modelo"
            />
          </div>
          <TextInput
            id="Modelo"
            placeholder="eje: A50"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Description"
              value="Descripción"
            />
          </div>
          <TextInput
            id="Marca"
            placeholder="eje: Muy bonito"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="UPC"
              value="Upc"
            />
          </div>
          <TextInput
            id="Marca"
            placeholder="eje: Ax234kc"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="Condition"
              value="Condición"
            />
          </div>
          <TextInput
            id="Marca"
            placeholder="eje: Nuevo"
            required={true}
          />
        </div>
        
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="peso"
              value="Peso"
            />
          </div>
          <TextInput
            id="Marca"
            placeholder="eje: 1.6 kg"
            required={true}
          />
        </div>

        <div className="flex justify-between">
    
        </div>
        <div className="w-full">
          <Button>
            Agregar producto
          </Button>
        </div>
      </div>
</div>
  )
}

export default MyForm