class AddQuestionTextToQuestion < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :question_text, :string
  end
end
