# typed: true

# DO NOT EDIT MANUALLY
# This is an autogenerated file for dynamic methods in `DashboardController`.
# Please instead update this file by running `bin/tapioca dsl DashboardController`.

class DashboardController
  sig { returns(HelperProxy) }
  def helpers; end

  module HelperMethods
    include ::ActionText::ContentHelper
    include ::ActionText::TagHelper
    include ::InertiaRails::Helper
    include ::ViteRails::TagHelpers
    include ::ActionController::Base::HelperMethods
    include ::DeviseHelper
  end

  class HelperProxy < ::ActionView::Base
    include HelperMethods
  end
end
