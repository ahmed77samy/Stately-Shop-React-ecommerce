let serviceRegistration = []
let internalServiceRegistration ={}

/**
 * save all internal service to internalServiceRegistration
 * @param {Array} internalServiceList 
 */
function internalRegister(internalServiceList) {
    for (const service of internalServiceList) {
        internalServiceRegistration[service.provider.name] = service.provider.call
    }
}

/**
 * save all service to serviceRegistration
 * @param {Array} serviceList 
 */
function register(serviceList) {
    serviceRegistration = serviceList
}

/**
 * run the service and passed the internal service
 */
function ready() {
    for (const service of serviceRegistration) {
        service(internalServiceRegistration)
    }
}

const serviceProvider =  {
    internalRegister,
    register,
    ready
}

export default serviceProvider