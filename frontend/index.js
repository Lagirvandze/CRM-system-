(() => {
    const SERVER_URL = 'http://localhost:3000';
    const URL_PREFIX = '/api/clients';

    const validateSuccessClass = 'just-validate-success-field';
    const validationErrorClass = 'just-validate-error-field';
    let imtel = new Inputmask("+7 (999) 999-99-99");
    document.addEventListener('DOMContentLoaded', async function() {
        // элементы таблицы
        const $tableBody = document.querySelector('tbody');
            $btnTableID = document.getElementById('table-btn-id');
            $btnTableArrowID = document.getElementById('table-btn-arrow-id');
            $btnTableFIO = document.getElementById('table-btn-fio');
            $btnTableArrowFIO = document.getElementById('table-btn-arrow-fio');
            $btnTableAFIO = document.getElementById('table-btn-a-fio');
            $btnTableCreateDate = document.getElementById('table-btn-createDate');
            $btnTableArrowCreateDate = document.getElementById('table-btn-arrow-createDate');
            $btnTableUpdateDate = document.getElementById('table-btn-updateDate');
            $btnTableArrowUpdateDate = document.getElementById('table-btn-arrow-updateDate');
        
            $btnAddClient = document.getElementById('btn-add-client');

            $containerClients = document.getElementById('clients');

            $searchClientsInput = document.getElementById('search');

            $modalWindow = document.getElementById('modalWindow');
            $spinnerTableBody = document.getElementById('spinner-table-body');
            $mainError = document.querySelector('.error');

            $btnOpenSearch = document.querySelector('.header__logo-btn');
            $btnCloseSearch = document.getElementById('btn-close-search');

        // форма удаления клиента
        const formDeleteClient = document.createElement('form'),
              headerFormDeleteClient = document.createElement('h2'),
              divFormDeleteClient = document.createElement('div'),
              btnDeleteFormDeleteClient = document.createElement('button'),
              spinnerBtnDelete = document.createElement('span'),
              btnCancelFormDeleteClient = document.createElement('button'),
              btnCloseFormDeleteClient = document.createElement('button'),
              formErrorDelete = document.createElement('div');
            
          $modalWindow.style.display = '';
          formDeleteClient.classList.add('form', 'form-delete', 'flex');
          headerFormDeleteClient.classList.add('form__title', 'form-delete__title');
          headerFormDeleteClient.textContent = 'Удалить клиента';
          divFormDeleteClient.classList.add('form-delete__descr');
          divFormDeleteClient.textContent = 'Вы действительно хотите удалить данного клиента?';
          btnDeleteFormDeleteClient.classList.add('mybtn', 'form__btn-purple', 'flex');
          btnDeleteFormDeleteClient.setAttribute('type', 'submit');
          btnDeleteFormDeleteClient.textContent = 'Удалить';
          spinnerBtnDelete.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-purple');
          btnCancelFormDeleteClient.classList.add('form__btn-cancel-delete', 'form-delete__btn-cancel');
          btnCancelFormDeleteClient.setAttribute('type', 'button');
          btnCancelFormDeleteClient.textContent = 'Отмена';
          btnCloseFormDeleteClient.classList.add('btn-close','btn-close-form', 'form-delete__btn-close');
          btnCloseFormDeleteClient.setAttribute('type', 'button');
          btnCloseFormDeleteClient.setAttribute('aria-label', 'Close');
          formErrorDelete.classList.add('form__error');

          $containerClients.append(formDeleteClient);
          formDeleteClient.append(headerFormDeleteClient);
          formDeleteClient.append(divFormDeleteClient);
          formDeleteClient.append(formErrorDelete);
          formDeleteClient.append(btnDeleteFormDeleteClient);
          formDeleteClient.append(btnCancelFormDeleteClient);
          formDeleteClient.append(btnCloseFormDeleteClient);
          btnDeleteFormDeleteClient.prepend(spinnerBtnDelete);

          // форма создания и изменения клиента
          const formClient = document.createElement('form'),
              divHeaderFormClient = document.createElement('div'),
              headerFormClient = document.createElement('h2'),
              spanFormClient = document.createElement('span'),
              divInputFormClient = document.createElement('div'),
              labelSurnameFormClient = document.createElement('label'),
              labelNameFormClient = document.createElement('label'),
              labelLastnameFormClient = document.createElement('label'),
              inputSurnameFormClient = document.createElement('input'),
              inputNameFormClient = document.createElement('input'),
              inputLastnameFormClient = document.createElement('input'),
              placeholderSurnameFormClient = document.createElement('div'),
              spanSurnameFormClient = document.createElement('span'),
              placeholderNameFormClient = document.createElement('div'),
              spanNameFormClient = document.createElement('span'),
              placeholderLastnameFormClient = document.createElement('div'),
              divContactsFormClient = document.createElement('div'),
              divContactsGroupFormClient = document.createElement('div'),
              btnAddContFormClient = document.createElement('button'),
              btnSaveFormClient = document.createElement('button'),
              btnDeleteFormClient = document.createElement('button'),
              btnCloseFormClient = document.createElement('button'),
              btnCancelFormClient = document.createElement('button'),
              spinnerBtnSave = document.createElement('span'),
              formError = document.createElement('div');
          
         
          formClient.classList.add('form', 'form-update', 'flex');
          formClient.setAttribute('id', 'formClient');
          divHeaderFormClient.classList.add('form__container-title', 'flex');
          headerFormClient.classList.add('form__title');
          spanFormClient.classList.add('form__title-id');
          spanFormClient.setAttribute('id', 'formTitleId');
          divInputFormClient.classList.add('form__container-input');
          labelNameFormClient.classList.add('form__placeinput');
          labelLastnameFormClient.classList.add('form__placeinput');
          labelSurnameFormClient.classList.add('form__placeinput');
          inputNameFormClient.classList.add('form__input');
          inputNameFormClient.setAttribute('type', 'text');
          inputNameFormClient.setAttribute('id', 'inputName');
          inputSurnameFormClient.classList.add('form__input');
          inputSurnameFormClient.setAttribute('type', 'text');
          inputSurnameFormClient.setAttribute('id', 'inputSurname');
          inputLastnameFormClient.classList.add('form__input');
          inputLastnameFormClient.setAttribute('type', 'text');
          inputLastnameFormClient.setAttribute('id', 'inputLastname');
          placeholderNameFormClient.classList.add('form__place-holder');
          placeholderNameFormClient.textContent = 'Имя';
          spanNameFormClient.textContent = '*';
          placeholderSurnameFormClient.classList.add('form__place-holder');
          placeholderSurnameFormClient.textContent = 'Фамилия';
          spanSurnameFormClient.textContent = '*';
          placeholderLastnameFormClient.classList.add('form__place-holder');
          placeholderLastnameFormClient.textContent = 'Отчество';
          divContactsFormClient.classList.add('flex', 'form__contacts');
          divContactsFormClient.setAttribute('id', 'div-updatecontacts-1');
          divContactsGroupFormClient.classList.add('flex', 'form__contacts-group');
          divContactsGroupFormClient.setAttribute('id', 'div-updatecontacts');
          btnAddContFormClient.classList.add('flex', 'form__contacts-btn');
          btnAddContFormClient.setAttribute('type', 'button');
          btnAddContFormClient.setAttribute('id', 'brn-update-add-contact');
          btnAddContFormClient.textContent = 'Добавить контакт';
          btnSaveFormClient.classList.add('btn', 'mybtn', 'form__btn-purple', 'flex');
          btnSaveFormClient.setAttribute('type', 'submit');
          btnSaveFormClient.setAttribute('id', 'btn-submit-formUpdate');
          formError.classList.add('form__error');
          
          btnSaveFormClient.textContent = 'Сохранить';
          spinnerBtnSave.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-purple');
          
          btnDeleteFormClient.classList.add('form__btn-cancel-delete', 'form__btn-delete');
          btnDeleteFormClient.setAttribute('id', 'btnDeleteFormClient');
          btnDeleteFormClient.setAttribute('type', 'button');
          btnDeleteFormClient.textContent = 'Удалить клиента';
          btnCancelFormClient.classList.add('form__btn-cancel-delete', 'form__btn-cancel');
          btnCancelFormClient.setAttribute('type', 'button');
          btnCancelFormClient.textContent = 'Отмена';
          btnCloseFormClient.classList.add('btn-close', 'btn-close-form');
          btnCloseFormClient.setAttribute('aria-label', 'Close');
          btnCloseFormClient.setAttribute('type', 'button');
          btnCloseFormClient.setAttribute('id', 'btn-close-formUpdate');

          $containerClients.append(formClient);
          formClient.append(divHeaderFormClient);
          divHeaderFormClient.append(headerFormClient);
          divHeaderFormClient.append(spanFormClient);
          formClient.append(divInputFormClient);
          divInputFormClient.append(labelSurnameFormClient);
          divInputFormClient.append(labelNameFormClient);
          divInputFormClient.append(labelLastnameFormClient);
          labelLastnameFormClient.append(inputLastnameFormClient);
          labelLastnameFormClient.append(placeholderLastnameFormClient);
          labelNameFormClient.append(inputNameFormClient);
          labelNameFormClient.append(placeholderNameFormClient);
          
          labelSurnameFormClient.append(inputSurnameFormClient);
          labelSurnameFormClient.append(placeholderSurnameFormClient);
          formClient.append(divContactsFormClient);
          divContactsFormClient.append(divContactsGroupFormClient);
          divContactsFormClient.append(btnAddContFormClient);
          formClient.append(formError);
          formClient.append(btnSaveFormClient);
          btnSaveFormClient.prepend(spinnerBtnSave);
          
          formClient.append(btnDeleteFormClient);
          formClient.append(btnCancelFormClient);
          formClient.append(btnCloseFormClient);

         
          const validator1 = new window.JustValidate('#formClient');

          placeholderNameFormClient.append(spanNameFormClient);
          placeholderSurnameFormClient.append(spanSurnameFormClient);
          formClient.style.setProperty('--top-form', '19.9%');
          $modalWindow.style.display = '';

          // валидация на инпуты ФИО
          validator1
          .addField(inputNameFormClient, [
            {
                rule: 'required',
                errorMessage: '',
            },
            {
                rule: 'customRegexp',
                value: /^[A-ZА-ЯЁ\-]+$/i,
                errorMessage: '',
            },
          ])
          .addField(inputSurnameFormClient, [
            {
                rule: 'required',
                errorMessage: '',
            },
            {
                rule: 'customRegexp',
                value: /^[A-ZА-ЯЁ\-]+$/i,
                errorMessage: '',
            },
          ])
          .addField(inputLastnameFormClient, [
            {
                rule: 'customRegexp',
                value: /^[A-ZА-ЯЁ]+$/i,
                errorMessage: '',
            },
          ]);

        
        const parametrsTippy = {
          content: '',
          theme: 'default',
          arrow: true,
        }

        // изменение позиции top формы при изменении количества контактов в форме
        function correctTopForm(form, dir, coef = 1) {
          let topForm = getComputedStyle(form).getPropertyValue('--top-form');
          topForm = Number(topForm.split('%')[0]);
          let step = 3.8;
          let newTop = 0;
          if (dir == -1) {
            newTop = topForm - step * coef;
            if (newTop <= 0) {
              newTop = topForm;
            }
          } else if (dir == 1) {
            newTop = topForm + step * coef;
            if (newTop >= 20) {
              newTop = topForm;
            }
          }
          form.style.setProperty('--top-form', newTop + '%');
        }

        // валидация на контакты в форме
        function validateContacts(type, input) {
          if (type === 'Телефон') {
            validator1
              .addField(input, [
                {
                  rule: 'required',
                  errorMessage: 'Заполните телефон',
                }, 
                {
                  validator: (value) => {
                  return value.replace(/\D+/g,"").length === 11;
                  },
                  errorMessage: 'Введите корректный номер',
                },
              ])
          } else if (type === 'Email') {
            validator1
              .addField(input, [
                {
                  rule: 'required',
                  errorMessage: 'Заполните email',
                }, 
                {
                  rule: 'email',
                  errorMessage: 'Введите корректный email',
                }
              ])
          } else if (type === 'Facebook') {
            validator1
              .addField(input, [
                {
                  rule: 'required',
                  errorMessage: 'Заполните адрес',
                }, 
                {
                  rule: 'customRegexp',
                  value: /^[A-Z\-\.\/]+$/i,
                  errorMessage: 'Введите корректный адрес',
                }
              ])
          } else if (type === 'Vk') {
            validator1
            .addField(input, [
              {
                rule: 'required',
                errorMessage: 'Заполните адрес',
              }, 
              {
                rule: 'customRegexp',
                value: /^[A-Z\-\.\/]+$/i,
                errorMessage: 'Введите корректный адрес',
              }
            ])
          } else if (type === 'Другое') {
            validator1
            .addField(input, [
              {
                rule: 'required',
                errorMessage: 'Заполните контакт',
              }
             
            ])
          }
    }
        // для добавления форм для ввода контактов в форме создания клиента
        function addContacts(form, type = 'Телефон', value = '') {
          // создание селекта, инпута и кнопки удаления
            const divInputGroupContact = document.createElement('div');
                selectGroupContact = document.createElement('select');
                optionGroupContact1 = document.createElement('option');
                optionGroupContact2 = document.createElement('option');
                optionGroupContact3 = document.createElement('option');
                optionGroupContact4 = document.createElement('option');
                optionGroupContact5 = document.createElement('option');
                inputGroupContact = document.createElement('input');
                btnDeleteGroupContact = document.createElement('button');
                // контейнеры, меняющие отступы
                divContactsGroup = form.querySelector('.form__contacts-group');
                divContacts = form.querySelector('.form__contacts');
            divContactsGroup.append(divInputGroupContact);
            divInputGroupContact.append(selectGroupContact);
            divInputGroupContact.append(inputGroupContact);
            divInputGroupContact.append(btnDeleteGroupContact);
            selectGroupContact.append(optionGroupContact1);
            selectGroupContact.append(optionGroupContact2);
            selectGroupContact.append(optionGroupContact3);
            selectGroupContact.append(optionGroupContact4);
            selectGroupContact.append(optionGroupContact5);

            // добавление маски телефона по умолчанию
            imtel.mask(inputGroupContact);
            // настройка выпадающего списка у селекта
            divInputGroupContact.classList.add('group-contacts');
            selectGroupContact.setAttribute('name', 'select');
            optionGroupContact1.setAttribute('value', 'Телефон');
            optionGroupContact1.textContent = 'Телефон';
            optionGroupContact2.setAttribute('value', 'Email');
            optionGroupContact2.textContent = 'Email';
            optionGroupContact3.setAttribute('value', 'Facebook');
            optionGroupContact3.textContent = 'Facebook';
            optionGroupContact4.setAttribute('value', 'Vk');
            optionGroupContact4.textContent = 'Vk';
            optionGroupContact5.setAttribute('value', 'Другое');
            optionGroupContact5.textContent = 'Другое';
            btnDeleteGroupContact.classList.add('btn-group-contact');
            btnDeleteGroupContact.setAttribute('type', 'button');
            inputGroupContact.classList.add('form-control-input', 'is-active');

            // корректная отрисовка селекта при получении контакта
            if (type === 'Телефон') {
              optionGroupContact1.setAttribute('selected', 'true');
            } else if (type === 'Email') {
              optionGroupContact2.setAttribute('selected', 'true');
              Inputmask.remove(inputGroupContact);
            } else if (type === 'Facebook') {
              optionGroupContact3.setAttribute('selected', 'true');
              Inputmask.remove(inputGroupContact);
            } else if (type === 'Vk') {
              optionGroupContact4.setAttribute('selected', 'true');
              Inputmask.remove(inputGroupContact);
            } else if (type === 'Другое') {
              optionGroupContact5.setAttribute('selected', 'true');
              Inputmask.remove(inputGroupContact);
            }

            // получение ширины окна для адаптива плейсхолдера
            let widthInput = getComputedStyle(inputGroupContact).getPropertyValue('--width-form-input-contacts');
            if (Number(widthInput.split('px')[0]) > 200) {
              inputGroupContact.placeholder = 'Введите данные контакта';
            } else {
              inputGroupContact.placeholder = 'Введите данные';
            }
            inputGroupContact.value = value;
            // настройка селекта
            const choices = new Choices(selectGroupContact, {
                searchEnabled: false,
                editItems: true,
                allowHTML: false,
                placeholder: true,
                itemSelectText: '',
            });
            
            validateContacts(type, inputGroupContact);
            // переключение маски телефона в зависимости от значения селекта
            selectGroupContact.addEventListener('choice', function(event) {
              let inputTarget = event.target.closest('.group-contacts').querySelector('input');
              if (event.detail.choice.value === 'Телефон') {
                imtel.mask(inputTarget);
              } else {
                Inputmask.remove(inputTarget);
              }
              validateContacts(event.detail.choice.value, inputTarget);

            })
            
              if (inputGroupContact.value !== '') {
                inputGroupContact.classList.remove('is-active');
                btnDeleteGroupContact.classList.add('is-active');
              } else {
                inputGroupContact.classList.add('is-active');
                btnDeleteGroupContact.classList.remove('is-active');
              }

              inputGroupContact.addEventListener('input', function(event) {
                let inputTarget = event.target.closest('.group-contacts').querySelector('input');
                let btnDeleteTarget = event.target.closest('.group-contacts').querySelector('.btn-group-contact');
                if (inputTarget.value !== '') {
                  inputTarget.classList.remove('is-active');
                  btnDeleteTarget.classList.add('is-active');
                } else {
                  inputTarget.classList.add('is-active');
                  btnDeleteTarget.classList.remove('is-active');
                }
              })
            
            btnDeleteGroupContact.addEventListener('click', function() {
              divInputGroupContact.remove();
              correctTopForm(form, 1)
              if (divContactsGroup.childNodes.length == 0) {
                divContactsGroup.classList.remove('is-click');
                divContacts.classList.remove('is-click');
              }
            });
            parametrsTippy.content = 'Удалить контакт';
            tippy(btnDeleteGroupContact, parametrsTippy);
            

        }

        // отрисовка иконок контактов в таблицу
        function printContactsSvg(contact, div) {
          let button = document.createElement('button');
            button.classList.add('btn-reset','contact__btn');
            div.append(button);
            let svgPhone = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgPhone.classList.add('contact__svg');
            svgPhone.style.height = "16";
            svgPhone.style.width = "16";
            svgPhone.style.viewBox = "100 100 16 16";
            let pathPhone = document.createElementNS('http://www.w3.org/2000/svg','path');
            if (contact.type == 'Телефон') 
            {
              let circPhone = document.createElementNS('http://www.w3.org/2000/svg','circle');
              circPhone.style.fill="#9873FF";
              circPhone.style.r="8";
              circPhone.style.cx="8";
              circPhone.style.cy="8";
              pathPhone.setAttribute('d', 'M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z')
              pathPhone.style.fill = "white";
              button.append(svgPhone); 
              svgPhone.append(circPhone); 
              svgPhone.append(pathPhone);  
            } 
            else if (contact.type == 'Email') 
            {
              pathPhone.setAttribute('fill-rule', 'evenodd');
              pathPhone.setAttribute('clip-rule', 'evenodd');
              pathPhone.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
              pathPhone.style.fill = "#9873FF";
              button.append(svgPhone); 
              svgPhone.append(pathPhone);  
            } 
            else if (contact.type == 'Vk') 
            {
              pathPhone.setAttribute('d', 'M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z');
              pathPhone.style.fill = "#9873FF";
              button.append(svgPhone); 
              svgPhone.append(pathPhone);  
            }
            else if (contact.type == 'Facebook') 
            {
              pathPhone.setAttribute('d', 'M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z');
              pathPhone.style.fill = "#9873FF";
              button.append(svgPhone); 
              svgPhone.append(pathPhone);  
            }
            else {
              pathPhone.setAttribute('fill-rule', 'evenodd');
              pathPhone.setAttribute('clip-rule', 'evenodd');
              pathPhone.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z');
              pathPhone.style.fill = "#9873FF";
              button.append(svgPhone); 
              svgPhone.append(pathPhone);  
            }

            if (contact.type == 'Другое') {
              parametrsTippy.content = contact.value;
            } else {
              parametrsTippy.content = `${contact.type}: ${contact.value}`;
            }
            tippy(button, parametrsTippy);
        }
        
        // для отрисовки и добавления в колонку таблицы картинки и подсказки
        function getContactListForTable(array, tableCol) {
          const divButtonContacts = document.createElement('div');
          const btnNumbers = document.createElement('button');
          btnNumbers.classList.add('btn-reset', 'contact__btn-numbers');
          divButtonContacts.classList.add('flex', 'contact__container');
          tableCol.append(divButtonContacts);
          if (array.length > 4) {
            for (const iterator of array.slice(0, 4)) {
              printContactsSvg(iterator, divButtonContacts);
            }
            divButtonContacts.append(btnNumbers);
            btnNumbers.textContent = `+${String(array.length - 4)}`;
          } else {
            for (const iterator of array) {
              printContactsSvg(iterator, divButtonContacts);
            }
          }
          btnNumbers.addEventListener('click', function() {
            for (const iterator of array.slice(4, array.length)) {
              printContactsSvg(iterator, divButtonContacts);
            }
            btnNumbers.style.display = 'none';
          })
          
        }

        function addClientFIO(objarray) {
            for (const iterator of objarray) {
                iterator.fio = iterator.surname + ' ' + iterator.name + ' ' + iterator.lastName;
            }
            return objarray;
        }

        function addClientDate(obj) {
              let spanCreateDate = document.createElement('span');
              let spanCreateTime = document.createElement('span');
              let spanUpdateDate = document.createElement('span');
              let spanUpdateTime = document.createElement('span');

              let createDate = obj.createdAt.split('T')[0];
              let createTime = obj.createdAt.split('T')[1].split('.')[0];
              let updatesDate = obj.updatedAt.split('T')[0];
              let updatesTime = obj.updatedAt.split('T')[1].split('.')[0];
              spanCreateDate.textContent = Date.parse(createDate).toString('dd.MM.yyyy');
              spanCreateTime.textContent = Date.parse(createTime).toString('HH:mm');
              spanUpdateDate.textContent = Date.parse(updatesDate).toString('dd.MM.yyyy');
              spanUpdateTime.textContent = Date.parse(updatesTime).toString('HH:mm');
              
              spanCreateTime.classList.add('clients__table_td-span-time');
              spanUpdateTime.classList.add('clients__table_td-span-time');
          
          return {
            spanCreateDate,
            spanCreateTime,
            spanUpdateDate,
            spanUpdateTime,
          };
          
      }
    
        // удаление строк в таблице
        function deleteList() {
            let delList = document.querySelectorAll('.clients__table-tr');
            for (const delItem of delList) {
                delItem.remove();
            }
          };
          // удаление клиента
        async function deleteClientByID(id) {
            const response = fetch(SERVER_URL + URL_PREFIX + '/' + id, {
              method: 'DELETE'
            });
          
              const err = new TypeError();
              if ((await response).status === 200 || (await response).status === 201) {
                return response;
              } else if ((await response).status === 404 || (await response).status === 422 || (await response).status.toString[0] === '5') {
                if ((await response).statusText) {
                  err.errorMessages = (await response).statusText;
                } else {
                  err.errorMessages = 'Что-то пошло не так...';
                }
              } else {
                err.errorMessages = 'Что-то пошло не так...';
              }
              throw err;
            
          }
          
        // поиск клиента
        $searchClientsInput.addEventListener('input', async function() {
          await renderClientsTable($searchClientsInput.value);
        });
        
        // запрос клиента для формы
        async function requestClientByID(id) {
            const response = await fetch(SERVER_URL + URL_PREFIX + '/' + id);
            const infClient = await response.json();
            if (infClient) {
              const err = new TypeError();
              if (response.status === 200 || response.status === 201) {
                return infClient;
              } else if (response.status === 404 || response.status === 422 || response.status.toString[0] === '5') {
                if (infClient.message) {
                  err.errorMessages = infClient.message;
                } else {
                  err.errorMessages = 'Что-то пошло не так...';
                }
              } else {
                err.errorMessages = 'Что-то пошло не так...';
              }
              throw err;
            } else {
              console.log('dfdf');
              throw new Error('Не удалось получить данные клиента');
              
            }
          
          }
          
        // отправка данных клиента на сервис
        async function sendingClient(dataa, id) {
            if (id === '') {
              dop = '';
              meth = 'POST';
            } else {
              dop = `/${id}`;
              meth = 'PATCH';
            }

          // выполнение запроса
          const resp = await fetch(SERVER_URL + URL_PREFIX + dop, {
            method: meth,
            body: JSON.stringify(dataa),
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json',
            }
            });
          const clients = await resp.json();
        
          if (clients) {
            const err = new TypeError();
            if (resp.status === 200 || resp.status === 201) {
              return clients;
            } else if (resp.status === 404 || resp.status === 422) {
              if (clients.errors) {
                err.errorMessages = clients.errors.map(err => ({
                          message: err.message,
                }))
              } else {
                err.errorMessages = 'Что-то пошло не так...';
              }
            } else {
              err.errorMessages = 'Что-то пошло не так...';
            }
            throw err;
          } else {
            throw new Error('Не удалось получить данные клиента');
          }
        }


        async function getClientsForRender(search = '') {
          const response = await fetch(SERVER_URL + URL_PREFIX+ '?search=' + search);
          const clientsList = await response.json();
          if (clientsList) {
            const err = new TypeError();
            if (response.status === 200 || response.status === 201) {
              return clientsList;
            } else if (response.status === 404 || response.status === 422 || response.status.toString[0] === '5') {
              if (clientsList.message) {
                err.errorMessages = clientsList.message;
              } else {
                err.errorMessages = 'Что-то пошло не так...';
              }
            } else {
              err.errorMessages = 'Что-то пошло не так...';
            }
            throw err;
          } else {
            throw new Error('Не удалось получить данные клиента');
          }
          
        }

        // создание формы удаления
        async function createFormDeleteClient(id, tableStr) {
          // получаем данные о кнопке для добавления спиннера
          const btnDeleteTable = tableStr.querySelector('.table__body-btn-delete'),
                spinnerDeleteTable = tableStr.querySelector('.table__body-btn-delete span');
          // изменяем состояния формы и модального окна на активные
          formDeleteClient.classList.add('is-active');
          $modalWindow.style.display = 'block';
          // обработка отправки
          formDeleteClient.addEventListener('submit', async function(evt) {
            evt.preventDefault();
            try {
              btnDeleteTable.classList.remove('table__body-btn-delete-after');
              spinnerDeleteTable.style.display = 'block';
              spinnerBtnDelete.style.display = 'block';
              await deleteClientByID(id);
              tableStr.remove();
              formDeleteClient.classList.remove('is-active');
              formDeleteClient.remove();
              $modalWindow.style.display = 'none';
            } catch (err) {
              if (err.name !== 'TypeError') throw err;
                if (err.errorMessages) {
                  
                  formErrorDelete.textContent = err.errorMessages ;
                  } else {
                    formErrorDelete.textContent = 'Что-то пошло не так ...';
                  }
            } finally {
              btnDeleteTable.classList.add('table__body-btn-delete-after');
              spinnerDeleteTable.style.display = 'none';
              spinnerBtnDelete.style.display = 'none';
            }
             
          })

          btnCancelFormDeleteClient.addEventListener('click', function() {
            formDeleteClient.classList.remove('is-active');
            $modalWindow.style.display = 'none';
          });
  
          btnCloseFormDeleteClient.addEventListener('click', function() {
            formDeleteClient.classList.remove('is-active');
            $modalWindow.style.display = 'none';
          });
        }

        // создание формы добавления и изменения данных клиента 
        async function createFormClient(id = '', tableStr = '') {
          formClient.classList.add('is-active');
          $modalWindow.style.display = 'block';
          clearForm(formClient);
          // проверка, чтобы плейсхолдеры у ФИО поднимались наверх, если инпуты заполнены
          inputNameFormClient.addEventListener('input', function() {
            if(inputNameFormClient.value != '') {
              placeholderNameFormClient.classList.add('form__place-holder_update');
              
            } else {
              placeholderNameFormClient.classList.remove('form__place-holder_update');
            }
          });
          inputSurnameFormClient.addEventListener('input', function() {
            if(inputSurnameFormClient.value != '') {
              placeholderSurnameFormClient.classList.add('form__place-holder_update');
            } else {
              placeholderSurnameFormClient.classList.remove('form__place-holder_update');
            }
          });
          inputLastnameFormClient.addEventListener('input', function() {
            if(inputLastnameFormClient.value != '') {
              placeholderLastnameFormClient.classList.add('form__place-holder_update');
            } else {
              placeholderLastnameFormClient.classList.remove('form__place-holder_update');
            }
          });

          // проверка на форму: новый клиент или изменить клиента 
          // (логика: есть id - изменить, нет id - новый клиент)
          if (id === '') {
            spanFormClient.textContent = '';
            btnCancelFormClient.classList.add('is-active');
            btnDeleteFormClient.classList.remove('is-active');
            headerFormClient.textContent = 'Новый клиент';
          } else {
            const btnUpdate = tableStr.querySelector('.table__body-btn-update');
            const spinnerUpdate = tableStr.querySelector('.table__body-btn-update span');
            btnCancelFormClient.classList.remove('is-active');
            btnDeleteFormClient.classList.add('is-active');
            headerFormClient.textContent = 'Изменить данные';
            formError.textContent;
            let infClient;
            // запрос на данные клиента по id и отрисовка
            try {
              btnUpdate.classList.remove('table__body-btn-update-after');
              spinnerUpdate.style.display = 'block';
              infClient = await requestClientByID(id);
              
            } catch (err) {
              console.log(err.errorMessages);
              if (err.name !== 'TypeError') throw err;
              if (err.errorMessages) { 
                    formError.textContent = err.errorMessages;
                }
            } finally {
              btnUpdate.classList.add('table__body-btn-update-after');
              spinnerUpdate.style.display = 'none';
            }

            spanFormClient.textContent = `ID: ${infClient.id}`;
            placeholderNameFormClient.classList.add('form__place-holder_update');
            inputSurnameFormClient.value = infClient.surname;
            placeholderSurnameFormClient.classList.add('form__place-holder_update');
            inputNameFormClient.value = infClient.name;
            inputLastnameFormClient.value = infClient.lastName;
            if (infClient.lastName) {
              placeholderLastnameFormClient.classList.add('form__place-holder_update');
            }
            // корректировка позиционирования по высоте формы в зависимости от количества контактов
            correctTopForm(formClient, -1, infClient.contacts.length)
            // отрисовка контактов в форму
            for (const cont of infClient.contacts) {
              // отрисовка контакта из массива
              addContacts(formClient, cont.type, cont.value);
              divContactsGroupFormClient.classList.add('is-click');
              divContactsFormClient.classList.add('is-click');
            }
          }
            
          // обработка кнопки добавить контакт
          btnAddContFormClient.addEventListener('click', function(evt) {
            // отрисовка контакта
            addContacts(formClient);
            // корректировка позиционирования формы
            correctTopForm(formClient, -1)
            // изменение отступов у контейнеров группы контактов
            divContactsGroupFormClient.classList.add('is-click');
            divContactsFormClient.classList.add('is-click');
            // ограничение на ввод не более 10 контактов (больше 10 - кнопка добавить контакт не доступна)
            if (divContactsGroupFormClient.childElementCount > 9) {
              btnAddContFormClient.style.display = 'none';
            }
          })
          

          formClient.addEventListener('submit', async (evt) => {
            evt.preventDefault();
            // получаем контакты
            let contacts = [];
            let groupCont = formClient.querySelectorAll('.group-contacts');
            for (const cont of groupCont) {
              let option = cont.querySelector('option');
              let input = cont.querySelector('input');
              contacts.push({
                type: option.value,
                value: input.value,
              });
            }

            // получение всех инпутов контактов
            let childrenContactsGroup = Array.from(divContactsGroupFormClient.querySelectorAll('input'));
            if (childrenContactsGroup.every(child => child.classList.contains(validateSuccessClass))&&
            inputNameFormClient.classList.contains(validateSuccessClass)&&
            inputSurnameFormClient.classList.contains(validateSuccessClass)) {
              // тело запроса
              let bodyResponse = {
                name: inputNameFormClient.value,
                surname: inputSurnameFormClient.value,
                lastName: inputLastnameFormClient.value,
                contacts: contacts,
              }

              try {
                spinnerBtnSave.style.display = 'block';
                await sendingClient(bodyResponse, id);
                
                formClient.remove();
                $modalWindow.style.display = 'none';
              } catch (err) {
                if (err.name !== 'TypeError') throw err;
                if (err.errorMessages) {
                    
                    formError.textContent = err.errorMessages
                        .map(errorMessage => errorMessage.message)
                        .join('. ');
                } else {
                  formError.textContent = 'Что-то пошло не так ...';
                }
            } finally {
                spinnerBtnSave.style.display = 'none';
            }
              await renderClientsTable();
            }
          
          });
          // обработчик на кнопку "крестик"
          btnCloseFormClient.addEventListener('click', () => {
            formClient.classList.remove('is-active');
            $modalWindow.style.display = 'none';
          });
          // обработчик на кнопку отмена
          btnCancelFormClient.addEventListener('click', () => {
            formClient.classList.remove('is-active');
            $modalWindow.style.display = 'none';
          });
          // обработчик на кнопку удалить
          btnDeleteFormClient.addEventListener('click', async function() {
            formClient.classList.remove('is-active');
            formClient.remove();
            $modalWindow.style.display = 'none';
            await createFormDeleteClient(id, tableStr);
          });
          // закрытие формы и модального окна при клике на модальное окно
          window.onclick = function(e) {
            if(e.target == $modalWindow) {
              formClient.classList.remove('is-active');
              $modalWindow.style.display = 'none';
            }
          };

          
        
        }

        async function getClientItem(obj) {
            // создание строки и ячеек таблицы
            const tableStr = document.createElement('tr'),
                tableCol1 = document.createElement('td'),
                tableCol2 = document.createElement('td'),
                tableCol3 = document.createElement('td'),
                tableCol4 = document.createElement('td'),
                tableCol5 = document.createElement('td'),
                tableCol6 = document.createElement('td'),
                divGroupButtons = document.createElement('div'),
                buttonUpdate = document.createElement('button'),
                spanbuttonUpdate = document.createElement('span'), 
                buttonDelete = document.createElement('button'),
                spanbuttonDelete = document.createElement('span'), 
                divCreateDate = document.createElement('div'),
                divUpdateDate = document.createElement('div');
               
                
               

            // добавление классов для строки таблицы
            tableStr.classList.add('clients__table-tr');
            tableCol1.classList.add('clients__table_td');
            tableCol1.classList.add('clients__table_td-id');
            tableCol1.classList.add('table__header-col-first');
            tableCol2.classList.add('clients__table_td', 'clients__table_td-fio');
            tableCol3.classList.add('clients__table_td', 'clients__table_td-createDate');
            tableCol4.classList.add('clients__table_td', 'clients__table_td-lastCor');
            tableCol5.classList.add('clients__table_td', 'clients__table_td-contacts');
            tableCol6.classList.add('clients__table_td', 'clients__table_td-update', 'table__header-col-last');
            // отрисовка svg картинок для кнопок "изменить" и "удалить"
           
            // контейнеры для svg для контактов
            divCreateDate.classList.add('flex', 'clients__table_td-div-date');
            divUpdateDate.classList.add('flex', 'clients__table_td-div-date');
            // получение красивых данных по дате создания и изменения
            let dates = addClientDate(obj);
            divCreateDate.append(dates.spanCreateDate);
            divCreateDate.append(dates.spanCreateTime);
            divUpdateDate.append(dates.spanUpdateDate);
            divUpdateDate.append(dates.spanUpdateTime);
            tableCol1.textContent = obj.id;
            tableCol2.textContent = obj.fio;
            tableCol3.append(divCreateDate);
            tableCol4.append(divUpdateDate);
            // отрисовка контактов в виде svg и добавление в ячейку
            getContactListForTable(obj.contacts, tableCol5);
            // добавление кнопок изменить/удалить
            buttonDelete.textContent = 'Удалить';
            buttonDelete.classList.add('table__body-btn', 'table__body-btn-delete', 'table__body-btn-delete-after', 'flex');
            spanbuttonDelete.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-table', 'spinner-border-btn-table-delete');
            buttonUpdate.textContent = 'Изменить';
            buttonUpdate.classList.add('table__body-btn','table__body-btn-update', 'table__body-btn-update-after', 'flex');
            spanbuttonUpdate.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-table', 'spinner-border-btn-table-update');
            divGroupButtons.classList.add('flex', 'table__body-group-btn');
            divGroupButtons.append(buttonUpdate);
            divGroupButtons.append(buttonDelete);
            $tableBody.append(tableStr);
            tableStr.append(tableCol1);
            tableStr.append(tableCol2);
            tableStr.append(tableCol3);
            tableStr.append(tableCol4);
            tableStr.append(tableCol5);
            tableStr.append(tableCol6);
            tableCol6.append(divGroupButtons);
            buttonDelete.prepend(spanbuttonDelete);
            buttonUpdate.prepend(spanbuttonUpdate);
          
            // обработчик кнопки изменить - создание формы изменения данных клиента
            buttonUpdate.addEventListener('click', function() {
              $modalWindow.style.display = 'block';
              createFormClient(obj.id, tableStr);
            });
            // обработчик кнопки удалить - создание формы удаления клиента
            buttonDelete.addEventListener('click', async function() {
              await createFormDeleteClient(obj.id, tableStr);
            });
            
        }
        // задание флагов для сортировки по умолчанию: по id и по возрастанию
        let sortProperty = 'id';
        let sortDir = false;
        // задание классов для шапки колонки id - фиолетовый цвет
        $btnTableID.classList.add('is-active');
        $btnTableArrowID.classList.add('is-active');
        $btnTableArrowID.classList.add('is-trans');

        // функция отрисовки клиентов в таблицу, полученных с сервера
        // доп аргумент - строка из поиска для фильтрации
        async function renderClientsTable(search = '') {
          let clientsList;
          try {
            $mainError.style.display = 'none';
            $spinnerTableBody.style.display = 'block';
            clientsList = await getClientsForRender(search);
          } catch (err) {
            // console.log($mainError);
            $mainError.style.display = 'block';
            if (err.name !== 'TypeError') throw err
              if (err.errorMessages) {   
                $mainError.textContent = err.errorMessages;
            } else {
              $mainError.textContent = 'Что-то пошло не так ...';
            }
              
          } finally {
            $spinnerTableBody.style.display = 'none';
          }
            // let clientsList = await getClientsForRender(search);
            deleteList()
            let copyList = [...clientsList];
            copyList = addClientFIO(copyList);

            // сортировка
            copyList = copyList.sort(function(a, b) {
                let sort = a[sortProperty] > b[sortProperty];
                if (sortDir == false) sort = a[sortProperty] < b[sortProperty];
                if (sort) return -1;

            }); 

            // отрисовка каждого клиента в таблицу
            for (const iterator of copyList) {
                getClientItem(iterator);
            }
        }
        // очищение формы
        function clearForm(form) {
          const inputsFIO = form.querySelectorAll('.form__input'),
              placeholdersFIO = form.querySelectorAll('.form__place-holder'),
              contactsGroup = form.querySelectorAll('.group-contacts'),
              divcontacts = document.getElementById('div-updatecontacts'),
              divcontacts1 = document.getElementById('div-updatecontacts-1');
          // удаление данных из инпутов
          for (const input of inputsFIO) {
            input.value = '';
            input.classList.remove(validationErrorClass);
          }
          // возвращение плейсхолдеров в обычное состояние (в строке)
          for (const placeholder of placeholdersFIO) {
            placeholder.classList.remove('form__place-holder_update');
          }
          // удаление контактов
          for (const contact of contactsGroup) {
            contact.remove();
          }
          // удаление отступов у контейнеров для контактов
          divcontacts.classList.remove('is-click');
          divcontacts1.classList.remove('is-click');
          // задание форме первичного позиционирования по вертикали
          form.style.setProperty('--top-form', '26.6%');
          
      }
      // первоначальная отрисовка списка клиентов
      await renderClientsTable();

        // сортировка по клику заголовка колонки id
        $btnTableID.addEventListener('click', async function() {
            sortDir = !sortDir;
            sortProperty = 'id';
            // подключаем активные классы для 
            $btnTableID.classList.add('is-active');
            $btnTableArrowID.classList.add('is-active');
            $btnTableArrowID.classList.toggle('is-trans');
            // отключаем активные классы у остальных
            $btnTableFIO.classList.remove('is-active');
            $btnTableAFIO.classList.remove('is-active');
            $btnTableArrowFIO.classList.remove('is-active');
            $btnTableCreateDate.classList.remove('is-active');
            $btnTableArrowCreateDate.classList.remove('is-active');
            $btnTableUpdateDate.classList.remove('is-active');
            $btnTableArrowUpdateDate.classList.remove('is-active');
            await renderClientsTable();
        });
        // сортировка по клику заголовка колонки ФИО
        $btnTableFIO.addEventListener('click', async function() {
            sortDir = !sortDir;
            sortProperty = 'fio';
            // подключаем активные классы для 
            $btnTableFIO.classList.add('is-active');
            $btnTableArrowFIO.classList.add('is-active');
            $btnTableAFIO.classList.add('is-active');
            $btnTableArrowFIO.classList.toggle('is-trans');
            // отключаем активные классы у остальных
            $btnTableID.classList.remove('is-active');
            $btnTableArrowID.classList.remove('is-active');
            $btnTableCreateDate.classList.remove('is-active');
            $btnTableArrowCreateDate.classList.remove('is-active');
            $btnTableUpdateDate.classList.remove('is-active');
            $btnTableArrowUpdateDate.classList.remove('is-active');
            await renderClientsTable();
        });
        // сортировка по клику заголовка колонки Дата создания
        $btnTableCreateDate.addEventListener('click', async function() {
            sortDir = !sortDir;
            sortProperty = 'createdAt';
            // подключаем активные классы для 
            $btnTableCreateDate.classList.add('is-active');
            $btnTableArrowCreateDate.classList.add('is-active');
            $btnTableArrowCreateDate.classList.toggle('is-trans');
            // отключаем активные классы у остальных
            $btnTableAFIO.classList.remove('is-active');
            $btnTableID.classList.remove('is-active');
            $btnTableArrowID.classList.remove('is-active');
            $btnTableFIO.classList.remove('is-active');
            $btnTableArrowFIO.classList.remove('is-active');
            $btnTableUpdateDate.classList.remove('is-active');
            $btnTableArrowUpdateDate.classList.remove('is-active');
            await renderClientsTable();
        });
        // сортировка по клику заголовка колонки изменения
        $btnTableUpdateDate.addEventListener('click', async function() {
            sortDir = !sortDir;
            sortProperty = 'updatedAt';
            // подключаем активные классы для 
            $btnTableUpdateDate.classList.add('is-active');
            $btnTableArrowUpdateDate.classList.add('is-active');
            $btnTableArrowUpdateDate.classList.toggle('is-trans');
            // отключаем активные классы у остальных
            $btnTableAFIO.classList.remove('is-active');
            $btnTableID.classList.remove('is-active');
            $btnTableArrowID.classList.remove('is-active');
            $btnTableFIO.classList.remove('is-active');
            $btnTableArrowFIO.classList.remove('is-active');
            $btnTableCreateDate.classList.remove('is-active');
            $btnTableArrowCreateDate.classList.remove('is-active');
            await renderClientsTable();
        });

        // модальное окно
        $btnAddClient.addEventListener('click', function() {
          createFormClient();
          $modalWindow.style.display = 'block';
        });
      
      // скролл
        let simpleBar = new SimpleBar(document.getElementById('table'), {
          autoHide: false,
          scrollbarMaxSize: 70
        });

        // в мобильной версии: лого - кнопка для открытия поиска (фильтрации)
        $btnOpenSearch.addEventListener('click', function() {
          $searchClientsInput.classList.add('is-active');
          $btnCloseSearch.classList.add('is-active');
        })
        // в мобильной версии: появляется кнопка крестик для закрытия поиска (фильтрации)
        $btnCloseSearch.addEventListener('click', function() {
          $searchClientsInput.classList.remove('is-active');
          $btnCloseSearch.classList.remove('is-active');
        } )

    })
})()