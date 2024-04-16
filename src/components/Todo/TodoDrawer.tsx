import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addTodo } from '@/Redux/Features/TodoSlice';
import { useAppDispatch } from '@/Redux/Hooks/Hooks';
import { DialogClose } from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';

export function AddTodo() {
  const [task, setTask] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      title: task,
      description: description,
    };
    dispatch(addTodo(taskDetails));
  };
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className=" bg-gradient-bg text-white font-semibold text-lg"
      >
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task here what you need to do
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={e => setTask(e.target.value)}
                id="task"
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={e => setDescription(e.target.value)}
                id="description"
                required
                className="col-span-3"
              />
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button className="bg-gradient-bg" type="submit">
                  Save changes
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
