Lazy Loading
============

### Introduction

We'd like to achive three things here:

1. The footprint of the initial bundle as delivered to the client should be as small as possible.
2. Achive loose coupling
3. The _integrating module_, thus _app_, is responsible for the _feature path_ for feature module

### Task

1. For each feature modules routing configuration change the _feature path_ to the empty string `path: ''`. 

  Hint: We make the decision where to mount this feature module in `app-routing.module.ts`

2. Open the `app-routing.module.ts` and add path configurations with `loadChildren` for each feature module (see HOWTOs).

3. Remove *ALL* references/ usages (TS imports, Angular imports, ...) of feature artifacts in the _app_ module. The only one reference to the feature module is a string.

4. Run the application. Open the _Chrome Developer Tools -> Network_. Reload the application and try to locate the lazy loaded bundles.

### HOWTOs

#### app-routing.module.ts

```ts
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/events'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: 'profiles',
    loadChildren: './profiles/profiles.module#ProfilesModule'
  },
];
```
