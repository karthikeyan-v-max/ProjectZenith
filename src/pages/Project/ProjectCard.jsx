import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = () => {
    const navigate = useNavigate();
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
        <div className='space-y-5'>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-5'>
                        <h1 className='cursor-pointer font-bold text-lg' onClick={()=>navigate("/project/3")}>
                            create Ecommerce Project
                        </h1>
                        <DotFilledIcon/>
                        <p className='text-sm text-gray-400'>fullstack</p>
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="rounded-full" variant="ghost" size="icon">
                                    <DotsVerticalIcon/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ducimus aspernatur expedita, itaque nemo esse temporibus magnam aliquam assumenda ratione molestias excepturi possimus? Excepturi, eius fugit vero reprehenderit voluptatum totam?</p>
            </div>
            <div className='flex flex-wrap gap-2 items-center'>
                {[1,1,1,1].map((item)=>
                    <Badge key={item} variant="outline">
                        {"frontend"}
                    </Badge>
                )}
            </div>
        </div>
    </Card>
   
  )
}

export default ProjectCard