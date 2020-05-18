class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :option
      t.string :answer

      t.timestamps
    end
  end
end
