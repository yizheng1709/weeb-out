class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :anime_id
      t.text :content
      t.string :name

      t.timestamps
    end
  end
end
