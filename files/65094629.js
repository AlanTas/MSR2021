    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'row_attr' => [
                    'class' => 'form-group'
                ],
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false
            ])
            ->add('url', UrlType::class, [
                'row_attr' => [
                    'class' => 'form-group'
                ],
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => false
            ])
            ->add('file', FileType::class, [
                'row_attr' => [
                    'class' => 'form-group'
                ],
                'attr' => [
                    'class' => 'form-control'
                ]
            ]);
    }

{% block body %}
    <div class="row">
        <div class="col-lg-12">
            <div class="card card-default">
                <div class="card-body">
                    {{ form_start(form) }}
                        <div class="slides" data-prototype="{{ form_widget(form.slides.vars.prototype)|e('html_attr') }}">
                            {% for slide in form.slides %}
                                <div class="slide">
                                    {{ form_row(slide.title) }}
                                    {{ form_row(slide.url) }}
                                    {{ form_row(slide.file) }}
                                </div>
                            {% endfor %}
                        </div>

                    <button type="button" class="btn btn-success add_item_link" data-collection-holder-class="slides">+</button>
                    <button type="button" class="btn btn-danger remove_item_link" data-collection-holder-class="slides">-</button>

                    <div class="form-footer pt-4 pt-5 mt-4 border-top">
                        <button type="submit" class="btn btn-primary btn-default">Save</button>
                    </div>

                    {{ form_end(form) }}
                </div>
            </div>
        </div>
    </div>
{% endblock %}
