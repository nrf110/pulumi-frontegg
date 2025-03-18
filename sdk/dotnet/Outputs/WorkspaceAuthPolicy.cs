// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Outputs
{

    [OutputType]
    public sealed class WorkspaceAuthPolicy
    {
        /// <summary>
        /// Whether users are allowed to sign up.
        /// </summary>
        public readonly bool AllowSignups;
        /// <summary>
        /// Allow tenants to invite new users via an invitation link.
        /// </summary>
        public readonly bool AllowTenantInvitations;
        /// <summary>
        /// Whether unverified users are allowed to log in.
        /// </summary>
        public readonly bool AllowUnverifiedUsers;
        /// <summary>
        /// The authentication strategy to use for people logging in.
        /// 
        /// 	Must be one of "EmailAndPassword", "Code", "MagicLink", "NoLocalAuthentication", "SmsCode"
        /// </summary>
        public readonly string AuthStrategy;
        /// <summary>
        /// Whether users can create API tokens.
        /// </summary>
        public readonly bool EnableApiTokens;
        /// <summary>
        /// Whether granular roles and permissions are enabled.
        /// </summary>
        public readonly bool EnableRoles;
        /// <summary>
        /// The expiration time for the JWT access tokens issued by Frontegg.
        /// </summary>
        public readonly int JwtAccessTokenExpiration;
        /// <summary>
        /// The algorithm Frontegg uses to sign JWT tokens.
        /// </summary>
        public readonly string? JwtAlgorithm;
        /// <summary>
        /// The public key that Frontegg uses to sign JWT tokens.
        /// </summary>
        public readonly string? JwtPublicKey;
        /// <summary>
        /// The expiration time for the JWT refresh tokens issued by Frontegg.
        /// </summary>
        public readonly int JwtRefreshTokenExpiration;
        /// <summary>
        /// Type of tokens users will be able to generate.
        /// 							Must be one of "ClientCredentials" or "AccessToken".
        /// </summary>
        public readonly string? MachineToMachineAuthStrategy;
        /// <summary>
        /// The SameSite policy to use for Frontegg cookies.
        /// 
        /// 	Must be one of "none", "lax", or "strict".
        /// </summary>
        public readonly string SameSiteCookiePolicy;

        [OutputConstructor]
        private WorkspaceAuthPolicy(
            bool allowSignups,

            bool allowTenantInvitations,

            bool allowUnverifiedUsers,

            string authStrategy,

            bool enableApiTokens,

            bool enableRoles,

            int jwtAccessTokenExpiration,

            string? jwtAlgorithm,

            string? jwtPublicKey,

            int jwtRefreshTokenExpiration,

            string? machineToMachineAuthStrategy,

            string sameSiteCookiePolicy)
        {
            AllowSignups = allowSignups;
            AllowTenantInvitations = allowTenantInvitations;
            AllowUnverifiedUsers = allowUnverifiedUsers;
            AuthStrategy = authStrategy;
            EnableApiTokens = enableApiTokens;
            EnableRoles = enableRoles;
            JwtAccessTokenExpiration = jwtAccessTokenExpiration;
            JwtAlgorithm = jwtAlgorithm;
            JwtPublicKey = jwtPublicKey;
            JwtRefreshTokenExpiration = jwtRefreshTokenExpiration;
            MachineToMachineAuthStrategy = machineToMachineAuthStrategy;
            SameSiteCookiePolicy = sameSiteCookiePolicy;
        }
    }
}
