// myComponent.js
angular.module('myApp', [])
    .component('myComponent', {
        template: `
            <div class="container">
                <h2>{{ $ctrl.title }}</h2>
                <div class="counter">
                    <p>Count: {{ $ctrl.count }}</p>
                    <button ng-click="$ctrl.increment()">Increment</button>
                    <button ng-click="$ctrl.decrement()">Decrement</button>
                </div>
                <div class="list-section">
                    <h3>Items List</h3>
                    <ul>
                        <li ng-repeat="item in $ctrl.items">
                            {{ item.name }}
                            <button ng-click="$ctrl.removeItem(item)">Remove</button>
                        </li>
                    </ul>
                    <div class="add-item">
                        <input type="text" ng-model="$ctrl.newItemName" placeholder="New item name">
                        <button ng-click="$ctrl.addItem()">Add Item</button>
                    </div>
                </div>
                <div class="filter-section">
                    <input type="text" 
                           ng-model="$ctrl.searchText" 
                           ng-change="$ctrl.filterItems()"
                           placeholder="Search items...">
                </div>
            </div>
        `,
        controller: function() {
            var ctrl = this;
            
            // Initialize properties
            ctrl.title = 'Not my AngularJS Javascript Component';
            ctrl.count = 0;
            ctrl.items = [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ];
            ctrl.newItemName = '';
            ctrl.searchText = '';
            ctrl.filteredItems = [...ctrl.items];

            // Counter methods
            ctrl.increment = function() {
                ctrl.count++;
            };

            ctrl.decrement = function() {
                if (ctrl.count > 0) {
                    ctrl.count--;
                }
            };

            // Item management methods
            ctrl.addItem = function() {
                if (ctrl.newItemName.trim()) {
                    ctrl.items.push({
                        id: ctrl.items.length + 1,
                        name: ctrl.newItemName
                    });
                    ctrl.newItemName = '';
                    ctrl.filterItems();
                }
            };

            ctrl.removeItem = function(item) {
                var index = ctrl.items.indexOf(item);
                if (index > -1) {
                    ctrl.items.splice(index, 1);
                    ctrl.filterItems();
                }
            };

            // Search functionality
            ctrl.filterItems = function() {
                if (!ctrl.searchText) {
                    ctrl.filteredItems = [...ctrl.items];
                } else {
                    ctrl.filteredItems = ctrl.items.filter(function(item) {
                        return item.name.toLowerCase().includes(ctrl.searchText.toLowerCase());
                    });
                }
            };

            // Lifecycle hooks
            ctrl.$onInit = function() {
                console.log('Component initialized');
                ctrl.filterItems();
            };

            ctrl.$onDestroy = function() {
                console.log('Component destroyed');
                // Cleanup code here
            };
        }
    });
