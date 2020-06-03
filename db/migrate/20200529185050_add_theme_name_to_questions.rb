class AddThemeNameToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :theme_name, :string
  end
end
