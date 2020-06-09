class AddGuestUuidToQuestion < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :guest_uuid, :string
  end
end
