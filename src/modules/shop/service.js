import shopRoutes from "./services/routes"

/**
 * send the guset service to the service provider
 * @param {Object} internalServiceRegistration 
 */
export default function shopService (internalServiceRegistration) {
    shopRoutes(internalServiceRegistration.route)
}