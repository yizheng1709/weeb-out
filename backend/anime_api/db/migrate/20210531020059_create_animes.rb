class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :title
      t.text :summary
      t.string :cover
      t.string :tags

      t.timestamps
    end
  end
end
