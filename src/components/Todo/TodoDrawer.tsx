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
import { useAddTaskMutation } from '@/Redux/api/api';
// import { addTodo } from '@/Redux/Features/TodoSlice';
// import { useAppDispatch } from '@/Redux/Hooks/Hooks';
import { DialogClose } from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';

export function AddTodo() {
  const [task, setTask] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setpriority] = useState<string>('All');

  // !!* for localhost
  // const dispatch = useAppDispatch();

  // for serverhost
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addTask] = useAddTaskMutation();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      title: task,
      priority: priority,
      isCompleted: false,
      description: description,
    };
    // console.log(taskDetails);
    // !!* for localhost
    // dispatch(addTodo(taskDetails));
    addTask(taskDetails);
  };

  const selectPriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setpriority(e.target.value);
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <select
                value={priority}
                onChange={selectPriority}
                name="priority"
                id="priority"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="All">All</option>
              </select>
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
