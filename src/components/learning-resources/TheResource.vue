<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourceButtonMode"
    >Stored Resources</base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourceButtonMode"
    >Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResource from '@/components/learning-resources/AddResource';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          'id': 'official-guide',
          'title': 'Official Guide',
          'description': 'The official Vue.js documentation.',
          'link': 'https://vuejs.org'
        },
        {
          'id': 'google',
          'title': 'Google',
          'description': 'Learn to Google...',
          'link': 'https://google.com'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    }
  },
  computed: {
    storedResourceButtonMode() { return this.selectedTab === 'stored-resources' ? null : 'flat'; },
    addResourceButtonMode() { return this.selectedTab === 'add-resource' ? null : 'flat'; }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      this.storedResources.unshift({
        'id': title.toLowerCase().replace(' ', '-'),
        'title': title,
        'description': description,
        'link': link
      });
      this.selectedTab = 'stored-resources';
    },
    deleteResource(id) {
      const index = this.storedResources.findIndex(resource => resource.id === id)
      this.storedResources.splice(index, 1)
    }
  }
};
</script>
