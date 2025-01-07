import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import InviteUserForm from './InviteUserForm'

const ProjectDetails = () => {
  const handleProjectInvitation = () => {
    console.log("project invitation")
  }
  return (
    <>
      <div className='mt-5 lg:px-10'>
        <div className='Lg:flex gap-5 justify-between pb-4'>
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className='text-gray-400 pb-10 w-full'>
              <h1 className='text-lg font-bold pb-5'>Create Ecommerce Website Using React</h1>
              <div className='space-y-5 pb-10'>
                <p className='w-full md:max-w-lg lg:max-w-xl '>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className='flex'>
                  <p className='w-36'>Project Lead :</p>
                  <p>Karthi</p>
                </div>
                <div className='flex'>
                  <p className='w-36'>Members :</p>
                  <div className='flex items-center gap-3'>
                    {[1,1,1,1,1].map((item)=>
                      <Avatar className="cursor-pointer" key={item}>
                        <AvatarFallback>K</AvatarFallback>
                      </Avatar>
                    )}
                    <Dialog>
                      <DialogTrigger>
                        <DialogClose>
                          <Button size="sm" variant="outline" onClick={handleProjectInvitation}>
                            <span>Invite</span>
                            <PlusIcon />
                          </Button>
                        </DialogClose>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          Invite
                        </DialogHeader>
                        <InviteUserForm/>
                      </DialogContent>
                    </Dialog>
                  </div>

                </div>
                <div className='flex'>
                  <p className="w-36">Category :</p>
                  <p>FullStack</p>
                </div>
                <div className='flex'>
                  <p className='w-36'>Project Lead :</p>
                  <Badge className="cursor-pointer">Karthi</Badge>
                </div>
              </div>
            </div>
            
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails