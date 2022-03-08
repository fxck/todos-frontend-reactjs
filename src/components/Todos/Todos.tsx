import { Todo } from '@zerops/zestrat-models';
import ZsTodoItem from '../TodoItem';

interface ITodosProps {
  data: Todo[],
  handleAdd(): void,
  handleRemove(): void,
  handleUpdate(): void,
}

export const ZsTodos = (
  { data, handleAdd, handleRemove, handleUpdate }: ITodosProps
) => (
<div className="zs-todos">

  {/* [(ngModel)]="addValue"
    (keyup.enter)="add.emit(addValue); addValue = '';" */}

  <input
    className="zs-todo-add"
    type="text"
    placeholder="Add item? Type and press enter."
  />

  {data.map((item: Todo) => (
    <ZsTodoItem></ZsTodoItem>
  ))}


</div>
);

export default ZsTodos;
