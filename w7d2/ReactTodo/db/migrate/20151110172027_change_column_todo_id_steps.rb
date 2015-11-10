class ChangeColumnTodoIdSteps < ActiveRecord::Migration
  def change
    rename_column :steps, :todo_id_id, :todo_id
  end
end
