import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { tags } from '../ProjectList/ProjectList'
import { Cross1Icon } from '@radix-ui/react-icons'
// import { SelectValue } from '@radix-ui/react-select'

const CreateProjectForm = () => {

    const handleTagsChange = (item) =>{
        const currentTags = form.getValues("tags");

        const updatedTags = currentTags.includes(item)
        ? currentTags.filter((tag)=>tag !== item)
        :[...currentTags , item];

        form.setValue("tags" , updatedTags);
    }
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category:"",
            tags:["javascript" , "react"]
        },
    })

    const onSubmit = (data) => {
        console.log("create project data",data);
    }

  return (
    <div>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
                <FormField 
                control={form.control}
                name="name"
                render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                        type="text"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="project name..."
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                <FormField control={form.control}
                name="description"
                render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                        type="text"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="project description..."
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                 <FormField 
                control={form.control}
                name="category"
                render={({field})=><FormItem>
                    <FormControl>
                        <Select
                        defaultValue='fullstack'
                        value={field.value}
                        onValueChange={(value)=>{
                            field.onChange(value)
                        }}
                        // className="border w-full border-gray-700 py-5 px-5"
                        >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fullstack">Full Stack</SelectItem>
                            <SelectItem value="frontend">FrontEnd</SelectItem>
                            <SelectItem value="backend">BackEnd</SelectItem>
                        </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage/>
                </FormItem>}
                />
                <FormField 
                control={form.control}
                name="tags"
                render={({field})=><FormItem>
                    <FormControl>
                        <Select
                        onValueChange={(value)=>{
                            handleTagsChange(value)
                        }}
                        // className="border w-full border-gray-700 py-5 px-5"
                        >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Tags"/>
                        </SelectTrigger>
                        <SelectContent>
                            {tags.map((tag, index)=>(
                                <SelectItem key={index} value={tag}>{tag}</SelectItem>
                            ))}
                            
                        </SelectContent>
                        </Select>
                    </FormControl>
                    <div className='flex gap-1 flex-wrap'>
                        {field.value.map((item)=>
                            <div key={item} onClick={()=>handleTagsChange(item)} className='cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1'>
                            <span className='text-sm'>{item}</span>
                            <Cross1Icon className='h-3 w-3'/>
                        </div>
                    )
                    }
                    </div>
                    <FormMessage/>
                </FormItem>}
                />
                <DialogClose>
                    {false?(<div><p>you can create only 3 projects with free plan, please upgrade your plan</p></div>):
                    (<Button type="submit" className="w-full my-5">
                        Create Project
                        </Button>
                    )}
                </DialogClose>
            </form>
        </Form>
    </div>
  )
}

export default CreateProjectForm