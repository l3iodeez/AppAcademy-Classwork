class AddTopicToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :topic, :string
  end
end
