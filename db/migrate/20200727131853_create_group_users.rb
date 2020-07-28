class CreateGroupUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :group_users do |t|
      t.references :group, foreign_key: true #group_idというカラムを追加し外部キー制約をつける
      t.references :user, foreign_key: true #user_idというカラムを追加し外部キー制約をつける
      t.timestamps
    end
  end
end
