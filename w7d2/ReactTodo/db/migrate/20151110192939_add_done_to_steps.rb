class AddDoneToSteps < ActiveRecord::Migration
  def change
    add_column :steps, :done, :boolean, null: false, default: false
  end
end
