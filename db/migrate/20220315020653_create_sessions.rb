class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions do |t|
      t.string :name
      t.boolean :wip
      t.string :stg
      t.string :ltg
      t.text :tries, array: true, default: []
      t.integer :patient_id

      t.timestamps
    end
  end
end
