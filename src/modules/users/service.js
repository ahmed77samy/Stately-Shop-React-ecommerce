import userRoutes from "./services/routes"

/**
 * send the guset service to the service provider
 * @param {Object} internalServiceRegistration 
 */
export default function userService (internalServiceRegistration) {
    userRoutes(internalServiceRegistration.route)
}