export type TypeFilter = {
  sort_by?: string;
  sorting_order?: string;
  view_by?: string;
  search_by?: string;
  keyword?: string;
};

export type TypeCommentType = "deal" | "lead" | "task";
export type TypeNoteType = "deal" | "lead" | "task";
export type TypeQueueType = "EMAIL" | "SLACK" | "SMS" | "IN_APP";
export type TypeTaskStatus =
  | "todo"
  | "in_progress"
  | "done"
  | "blocked"
  | "on_hold"
  | "canceled";

export type TypeDropdownOption = {
  label: string;
  value: string;
};
