class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :body, null: false

      t.timestamps null: false
    end
  end
end
