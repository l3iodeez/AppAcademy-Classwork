class AddTodoIdToSteps < ActiveRecord::Migration
  def change
    add_reference :steps, :todo_id, index: true, foreign_key: true
  end
end
