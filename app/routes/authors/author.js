import Route from '@ember/routing/route';

export default Route.extend({
    model({id}){
        return this.get('store').findRecord('author', id, {include: 'posts'});
    }
});
