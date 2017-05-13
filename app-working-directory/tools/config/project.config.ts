import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true }, // inject into css section
      { src: 'bootstrap/dist/css/bootstrap-theme.min.css', inject: true }, // inject into css section
      { src: 'bootstrap/dist/css/bootstrap-theme.min.css.map', inject: true }, // inject into css section
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
    // required for dev build
    {
      name:'ngx-bootstrap',
      path:'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
    },

    // required for prod build
    {
      name:'ngx-bootstrap/*',
      path:'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
    },

    // mandatory dependency for ngx-bootstrap datepicker
    {
      name:'moment',
      path:'node_modules/moment',
      packageMeta:{
        main: 'moment.js',
        defaultExtension: 'js'
      }
    },

    // Add Firebase configuration to SystemJS
    {
      name: 'firebase',
      path: 'node_modules/firebase/',
      packageMeta: {
        main: 'firebase-browser.js',
        defaultExtension: 'js'
      }
    },

    // Add AngularFire configuration to SystemJS
    {
      name: 'angularfire2',
      path: 'node_modules/angularfire2/bundles/angularfire2.umd.js',
      packageMeta: {
        main: 'angularfire2.js',
        defaultExtension: 'js'
      }
    },

    // Adding Angular-SortableJS
    {
      name: 'angular-sortablejs',
      path: 'node_modules/angular-sortablejs/dist/',
      packageMeta: {
        main: 'index.js',
        defaultExtension: 'js'
      }
    },
    {
      name: 'sortablejs/Sortable.min',
      path: 'node_modules/sortablejs/Sortable.min.js'
    }
    ];
    this.addPackagesBundles(additionalPackages);

    // Development
    this.SYSTEM_CONFIG.paths['dragula'] = `${this.APP_BASE}node_modules/dragula/dist/dragula.min`;

    // Production
    this.SYSTEM_BUILDER_CONFIG.paths['dragula'] = `node_modules/dragula/dist/dragula.min.js`;

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };

    this.SYSTEM_CONFIG_DEV.paths['traceur'] = 'node_modules/traceur/bin/traceur.js';
  }

}
