class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    #deviseでカラムを追加（マイグレーションファイル以外）で保存できるようにする
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
