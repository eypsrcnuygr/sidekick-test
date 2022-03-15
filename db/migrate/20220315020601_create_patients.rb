class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :surname
      t.integer :session_id
      t.text :notes

      t.timestamps
    end
  end
end
