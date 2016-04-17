module ApplicationHelper
  def display_nav_categories
    categories_menu = ''
    categories_menu +=                '<ul class="nav navbar-nav">'
    Category.all.each do |category|
      categories_menu += active_link_to "#{category.name}", "/categories/#{category.slug}", :wrap_tag => :li
      # categories_menu +=        "<li><a href='/categories/#{category.slug}'>#{category.name}</a></li>"
    end
    categories_menu +=                '</ul>'
    categories_menu
  end

  def flash_messages(opts = {})
    @layout_flash = opts.fetch(:layout_flash) { true }

    capture do
      flash.each do |name, msg|
        concat content_tag(:div, msg, id: "flash_#{name}")
      end
    end
  end

  def show_layout_flash?
    @layout_flash.nil? ? true : @layout_flash
  end
end
