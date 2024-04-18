import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// interface FiltersProps {
//   onChange: (selectedFilter: "All" | "High" | "Medium" | "Low") => void;
// }


// const Filters = ({ onChange }) => {
const Filters = ({ priority, setPriority }) => {
  // const handleFilterChange = (selectedFilter: "All" | "High" | "Medium" | "Low") => {
  //   onChange(selectedFilter);
  // };

  // const handleValueChange = (value: string) => {
  //   handleFilterChange(value as "All" | "High" | "Medium" | "Low");
  // };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="bg-gradient-bg font-semibold text-white"
      >
        <Button variant="outline">Filters</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filters;
