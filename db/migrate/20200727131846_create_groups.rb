class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false #nameカラムを追加、空欄禁止
      t.index :name, unique: true #nameカラムにインデックスを追加、一意性制約あり
      t.timestamps
    end
  end
end
