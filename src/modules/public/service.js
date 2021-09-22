import publicRoutes from "./services/routes"

/**
 * send the guset service to the service provider
 * @param {Object} internalServiceRegistration 
 */
export default function publicService (internalServiceRegistration) {
    publicRoutes(internalServiceRegistration.route)
}