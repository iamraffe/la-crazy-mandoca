module PostHelper
  def display_categories(post_type = 'post')
    categories_select_box = ''
    categories_select_box +=    "<select name='#{post_type}[category_id]' class='categoryCombobox'>"
    Category.all.each do |category|
      categories_select_box +=        "<option class='blue-background' value='#{category.id}' >#{category.name}</option>"
    end
    categories_select_box +=    '</select>'
    categories_select_box
  end
end
