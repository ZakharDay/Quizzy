class AddGuestUuidToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :guest_uuid, :string
  end
end
