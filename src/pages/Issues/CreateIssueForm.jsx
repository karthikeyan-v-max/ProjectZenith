import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const CreateIssueForm = () => {
  const form = useForm({
    defaultValues:{
      issueName:"",
      description : ""
    }
  });

  const onSubmit = (data) =>{
    console.log("issue created with data = ",data);
  }
  return (
    <div>
              <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
         <FormField 
        control={form.control}
        name="issueName"
        render={({field})=>
        <FormItem>
            <FormControl>
                <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="issue name..."
                />
            </FormControl>
            <FormMessage/>
        </FormItem>}
        />

      <FormField 
        control={form.control}
        name="description"
        render={({field})=>
        <FormItem>
            <FormControl>
                <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="description..."
                />
            </FormControl>
            <FormMessage/>
        </FormItem>}
        />
        <DialogClose>
            <Button type="submit" className="w-full my-5">
                Create Issue
            </Button>
            
        </DialogClose>
    </form>
</Form>
    </div>
  )
}

export default CreateIssueForm