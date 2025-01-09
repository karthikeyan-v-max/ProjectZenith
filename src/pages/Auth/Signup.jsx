import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';

const Signup = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password:"",
            fullName:""
        },
    })

    const onSubmit = (data) => {
        console.log("create project data", data);
    }
    return (
        <div className='space-y-5'>
            <h1 className='text-3xl font-bold'>Register</h1>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
                <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="FullName..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="email..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>}
                    />

<FormField
                        control={form.control}
                        name="password"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="password..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>}
                    />
                    
                        <Button type="submit" className="w-full mt-5">
                            Register
                        </Button>

                    
                </form>
            </Form>
        </div>
    )
}

export default Signup