class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    locale = params[:locale]

    available_locales = I18n.available_locales.map &:to_s
    locale = I18n.default_locale unless locale.in? available_locales

    I18n.locale = locale
  end

end
