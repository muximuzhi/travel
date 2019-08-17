import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/AdministratorLogin',
      name: 'AdministratorLogin',
      component: () => import('@/components/AdministratorLogin.vue')
    },
    {
      path: '/webmasterCentral',
      name: 'WebmasterCentral',
      component: () => import('@/components/WebmasterCentral.vue')
    },
    {
      path: '/AdministratorInformation',
      name: 'AdministratorInformation',
      component: () => import('@/components/AdministratorInformation.vue')
    },
    {
      path: '/AdministratorLogin2',
      name: 'AdministratorLogin2',
      component: () => import('@/components/AdministratorLogin2.vue')
    },
    {
      path: '/EmergencyCenter',
      name: 'EmergencyCenter',
      component: () => import('@/components/EmergencyCenter.vue')
    },
    {
      path: '/WarningCenter',
      name: 'WarningCenter',
      component: () => import('@/components/WarningCenter.vue')
    },
    {
      path: '/WarningRecord',
      name: 'WarningRecord',
      component: () => import('@/components/WarningRecord.vue')
    },
    {
      path: '/EmergencyBank',
      name: 'EmergencyBank',
      component: () => import('@/components/EmergencyBank.vue')
    },
    {
      path: '/WarningWindow',
      name: 'WarningWindow',
      component: () => import('@/components/WarningWindow.vue')
    },
    {
      path: '/ReportProcessing',
      name: 'ReportProcessing',
      component: () => import('@/components/ReportProcessing.vue')
    },
    {
      path: '/NewPlan',
      name: 'NewPlan',
      component: () => import('@/components/NewPlan.vue')
    },
    {
      path: '/AddingPersonnel',
      name: 'AddingPersonnel',
      component: () => import('@/components/AddingPersonnel.vue')
    },
    {
      path: '/PersonnelManagement',
      name: 'PersonnelManagement',
      component: () => import('@/components/PersonnelManagement.vue')
    },
    {
      path: '/ModifyInformation',
      name: 'ModifyInformation',
      component: () => import('@/components/ModifyInformation.vue')
    },
    {
      path: '/AddPeople',
      name: 'AddPeople',
      component: () => import('@/components/AddPeople.vue')
    },
    {
      path: '/Deletepeople',
      name: 'Deletepeople',
      component: () => import('@/components/Deletepeople.vue')
    }

  ]
})
