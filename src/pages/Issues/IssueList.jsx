import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import IssueCard from './IssueCard'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'

const IssueList = ({title , status}) => {
  return (
    <div>
        <Dialog>
            <Card className="w-full md:w-[300px] lg:w-[310px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="px-2">
                    {[1,1,1].map(item =>(
                        <div key={item} className="space-y-2">
                        <IssueCard/>
                    </div>
                    ))}
                    
                </CardContent>
                <CardFooter>
                    <DialogTrigger>
                        <Button 
                            className="w-full flex items-center gap-2"
                            variant="outline"
                        >
                            <PlusIcon/>
                            Create Issue
                        </Button>
                    </DialogTrigger>
                </CardFooter>
            </Card>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Issue</DialogTitle>
                </DialogHeader>
                <CreateIssueForm/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default IssueList