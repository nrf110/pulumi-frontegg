// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface WorkspaceAdminPortal {
    /**
     * Enable access to account settings in the admin portal.
     */
    enableAccountSettings: pulumi.Input<boolean>;
    /**
     * Enable access to API tokens in the admin portal.
     */
    enableApiTokens: pulumi.Input<boolean>;
    /**
     * Enable access to audit logs in the admin portal.
     */
    enableAuditLogs: pulumi.Input<boolean>;
    /**
     * Enable access to groups in the admin portal.
     */
    enableGroups: pulumi.Input<boolean>;
    /**
     * Enable access to personal API tokens in the admin portal.
     */
    enablePersonalApiTokens: pulumi.Input<boolean>;
    /**
     * Enable access to privacy settings in the admin portal.
     */
    enablePrivacy: pulumi.Input<boolean>;
    /**
     * Enable access to profile settings in the admin portal.
     */
    enableProfile: pulumi.Input<boolean>;
    /**
     * Enable access to provisioning settings in the admin portal.
     */
    enableProvisioning: pulumi.Input<boolean>;
    /**
     * Enable access to roles and permissions in the admin portal.
     */
    enableRoles: pulumi.Input<boolean>;
    /**
     * Enable access to security settings in the admin portal.
     */
    enableSecurity: pulumi.Input<boolean>;
    /**
     * Enable access to SSO settings in the admin portal.
     */
    enableSso: pulumi.Input<boolean>;
    /**
     * Enable access to subscription settings in the admin portal.
     */
    enableSubscriptions: pulumi.Input<boolean>;
    /**
     * Enable access to usage information in the admin portal.
     */
    enableUsage: pulumi.Input<boolean>;
    /**
     * Enable access to user management in the admin portal.
     */
    enableUsers: pulumi.Input<boolean>;
    /**
     * Enable access to webhooks in the admin portal.
     */
    enableWebhooks: pulumi.Input<boolean>;
    /**
     * Configures the color palette for the admin portal.
     *
     * @deprecated Use `paletteAdminPortal Or/And paletteLoginBox` instead.
     */
    palette?: pulumi.Input<inputs.WorkspaceAdminPortalPalette>;
    /**
     * Configures the color palette for the admin portal.
     */
    paletteAdminPortal?: pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortal>;
    /**
     * Configures the color palette for the admin portal.
     */
    paletteLoginBox?: pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBox>;
}

export interface WorkspaceAdminPortalPalette {
    /**
     * Error color.
     */
    errors?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteError>[]>;
    /**
     * Info color.
     */
    infos?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteInfo>[]>;
    /**
     * Primary color.
     */
    primaries?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPalettePrimary>[]>;
    /**
     * Secondary color.
     */
    secondaries?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteSecondary>[]>;
    /**
     * Success color.
     */
    successes?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteSuccess>[]>;
    /**
     * Warning color.
     */
    warnings?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteWarning>[]>;
}

export interface WorkspaceAdminPortalPaletteAdminPortal {
    /**
     * Error color.
     */
    errors?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortalError>[]>;
    /**
     * Info color.
     */
    infos?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortalInfo>[]>;
    /**
     * Primary color.
     */
    primaries?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortalPrimary>[]>;
    /**
     * Secondary color.
     */
    secondaries?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortalSecondary>[]>;
    /**
     * Success color.
     */
    successes?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortalSuccess>[]>;
    /**
     * Warning color.
     */
    warnings?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteAdminPortalWarning>[]>;
}

export interface WorkspaceAdminPortalPaletteAdminPortalError {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteAdminPortalInfo {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteAdminPortalPrimary {
    /**
     * active color.
     */
    active: pulumi.Input<string>;
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * hover color.
     */
    hover: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteAdminPortalSecondary {
    /**
     * active color.
     */
    active: pulumi.Input<string>;
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * hover color.
     */
    hover: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteAdminPortalSuccess {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteAdminPortalWarning {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteError {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteInfo {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteLoginBox {
    /**
     * Error color.
     */
    errors?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBoxError>[]>;
    /**
     * Info color.
     */
    infos?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBoxInfo>[]>;
    /**
     * Primary color.
     */
    primaries?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBoxPrimary>[]>;
    /**
     * Secondary color.
     */
    secondaries?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBoxSecondary>[]>;
    /**
     * Success color.
     */
    successes?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBoxSuccess>[]>;
    /**
     * Warning color.
     */
    warnings?: pulumi.Input<pulumi.Input<inputs.WorkspaceAdminPortalPaletteLoginBoxWarning>[]>;
}

export interface WorkspaceAdminPortalPaletteLoginBoxError {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteLoginBoxInfo {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteLoginBoxPrimary {
    /**
     * active color.
     */
    active: pulumi.Input<string>;
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * hover color.
     */
    hover: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteLoginBoxSecondary {
    /**
     * active color.
     */
    active: pulumi.Input<string>;
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * hover color.
     */
    hover: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteLoginBoxSuccess {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteLoginBoxWarning {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPalettePrimary {
    /**
     * active color.
     */
    active: pulumi.Input<string>;
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * hover color.
     */
    hover: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteSecondary {
    /**
     * active color.
     */
    active: pulumi.Input<string>;
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * hover color.
     */
    hover: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteSuccess {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAdminPortalPaletteWarning {
    /**
     * contrast_text color.
     */
    contrastText: pulumi.Input<string>;
    /**
     * dark color.
     */
    dark: pulumi.Input<string>;
    /**
     * light color.
     */
    light: pulumi.Input<string>;
    /**
     * main color.
     */
    main: pulumi.Input<string>;
}

export interface WorkspaceAuthPolicy {
    /**
     * Whether users are allowed to sign up.
     */
    allowSignups: pulumi.Input<boolean>;
    /**
     * Allow tenants to invite new users via an invitation link.
     */
    allowTenantInvitations: pulumi.Input<boolean>;
    /**
     * Whether unverified users are allowed to log in.
     */
    allowUnverifiedUsers: pulumi.Input<boolean>;
    /**
     * The authentication strategy to use for people logging in.
     *
     * 	Must be one of "EmailAndPassword", "Code", "MagicLink", "NoLocalAuthentication", "SmsCode"
     */
    authStrategy: pulumi.Input<string>;
    /**
     * Whether users can create API tokens.
     */
    enableApiTokens: pulumi.Input<boolean>;
    /**
     * Whether granular roles and permissions are enabled.
     */
    enableRoles: pulumi.Input<boolean>;
    /**
     * The expiration time for the JWT access tokens issued by Frontegg.
     */
    jwtAccessTokenExpiration: pulumi.Input<number>;
    /**
     * The algorithm Frontegg uses to sign JWT tokens.
     */
    jwtAlgorithm?: pulumi.Input<string>;
    /**
     * The public key that Frontegg uses to sign JWT tokens.
     */
    jwtPublicKey?: pulumi.Input<string>;
    /**
     * The expiration time for the JWT refresh tokens issued by Frontegg.
     */
    jwtRefreshTokenExpiration: pulumi.Input<number>;
    /**
     * Type of tokens users will be able to generate.
     * 							Must be one of "ClientCredentials" or "AccessToken".
     */
    machineToMachineAuthStrategy?: pulumi.Input<string>;
    /**
     * The SameSite policy to use for Frontegg cookies.
     *
     * 	Must be one of "none", "lax", or "strict".
     */
    sameSiteCookiePolicy: pulumi.Input<string>;
}

export interface WorkspaceBotDetectionEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceBruteForceProtectionEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceBulkTenantsInvitesEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceCaptchaPolicy {
    /**
     * Email addresses that should be exempt from CAPTCHA checks.
     */
    ignoredEmails?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The minimum CAPTCHA score to accept. Set to 0.0 to accept all scores.
     */
    minScore: pulumi.Input<number>;
    /**
     * The reCAPTCHA secret key to use.
     */
    secretKey: pulumi.Input<string>;
    /**
     * The reCAPTCHA site key to use.
     */
    siteKey: pulumi.Input<string>;
}

export interface WorkspaceEmailVerificationEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceFacebookSocialLogin {
    /**
     * The client ID of the Facebook application to authenticate with. Required when setting **`customised`** parameter to true.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Determine whether the SSO should use customized secret and client ID. When passing true, clientId and secret are also required.
     */
    customised?: pulumi.Input<boolean>;
    /**
     * The URL to redirect to after a successful authentication.
     */
    redirectUrl: pulumi.Input<string>;
    /**
     * The secret associated with the Facebook application. Required when setting **`customised`** parameter to true.
     */
    secret?: pulumi.Input<string>;
}

export interface WorkspaceGithubSocialLogin {
    /**
     * The client ID of the GitHub application to authenticate with. Required when setting **`customised`** parameter to true.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Determine whether the SSO should use customized secret and client ID. When passing true, clientId and secret are also required.
     */
    customised?: pulumi.Input<boolean>;
    /**
     * The URL to redirect to after a successful authentication.
     */
    redirectUrl: pulumi.Input<string>;
    /**
     * The secret associated with the GitHub application. Required when setting **`customised`** parameter to true.
     */
    secret?: pulumi.Input<string>;
}

export interface WorkspaceGoogleSocialLogin {
    /**
     * The client ID of the Google application to authenticate with. Required when setting **`customised`** parameter to true.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Determine whether the SSO should use customized secret and client ID. When passing true, clientId and secret are also required.
     */
    customised?: pulumi.Input<boolean>;
    /**
     * The URL to redirect to after a successful authentication.
     */
    redirectUrl: pulumi.Input<string>;
    /**
     * The secret associated with the Google application. Required when setting **`customised`** parameter to true.
     */
    secret?: pulumi.Input<string>;
}

export interface WorkspaceHostedLogin {
    /**
     * Allowed redirect URLs.
     */
    allowedRedirectUrls?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface WorkspaceImpossibleTravelEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceLockoutPolicy {
    /**
     * The number of failed attempts after which a user will be locked out.
     */
    maxAttempts: pulumi.Input<number>;
}

export interface WorkspaceMagicCodeEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceMagicLinkEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceMfaAuthenticationApp {
    /**
     * The service name to display in the authentication app.
     */
    serviceName: pulumi.Input<string>;
}

export interface WorkspaceMfaEnrollEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceMfaOtcEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceMfaPolicy {
    /**
     * Allow users to remember their MFA devices.
     */
    allowRememberDevice: pulumi.Input<boolean>;
    /**
     * The number of seconds that MFA devices can be remembered for, if allowRememberMyDevice is true.
     */
    deviceExpiration: pulumi.Input<number>;
    /**
     * Whether to force use of MFA.
     *
     * 	Must be one of "off", "on", or "unless-saml".
     */
    enforce: pulumi.Input<string>;
}

export interface WorkspaceMfaRecoveryCodeEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceMfaUnenrollEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceMicrosoftSocialLogin {
    /**
     * The client ID of the Microsoft application to authenticate with. Required when setting **`customised`** parameter to true.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Determine whether the SSO should use customized secret and client ID. When passing true, clientId and secret are also required.
     */
    customised?: pulumi.Input<boolean>;
    /**
     * The URL to redirect to after a successful authentication.
     */
    redirectUrl: pulumi.Input<string>;
    /**
     * The secret associated with the Microsoft application. Required when setting **`customised`** parameter to true.
     */
    secret?: pulumi.Input<string>;
}

export interface WorkspaceNewDeviceConnectedEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceNewMfaMethodEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceOidc {
    /**
     * The URL to redirect to after the OIDC exchange.
     */
    redirectUrl: pulumi.Input<string>;
}

export interface WorkspacePasswordPolicy {
    allowPassphrases: pulumi.Input<boolean>;
    /**
     * The number of historical passwords to prevent users from reusing. Set to zero to disable.
     */
    history: pulumi.Input<number>;
    /**
     * The maximum length of a password.
     */
    maxLength: pulumi.Input<number>;
    /**
     * The minimum length of a password.
     */
    minLength: pulumi.Input<number>;
    minPhraseLength: pulumi.Input<number>;
    /**
     * The minimum number of strength tests the password must meet.
     */
    minTests: pulumi.Input<number>;
}

export interface WorkspacePwnedPasswordEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceRemoveMfaMethodEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceResetPasswordEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceResetPhoneNumberEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceSaml {
    /**
     * The ACS URL for the SAML authentication flow.
     */
    acsUrl: pulumi.Input<string>;
    /**
     * The URL to redirect to after the SAML exchange.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The name of the service provider that will be displayed to users.
     */
    spEntityId: pulumi.Input<string>;
}

export interface WorkspaceSmsAuthenticationEnabledEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceSsoDomainPolicy {
    /**
     * Whether to allow users to add their own email domain without validating the domain through DNS.
     */
    allowVerifiedUsersToAddDomains?: pulumi.Input<boolean>;
    /**
     * Whether to allow users to sign in even via SSO even if the associated domain has not been validated through DNS.
     */
    bypassDomainCrossValidation?: pulumi.Input<boolean>;
    /**
     * Whether to automatically mark new SSO domains as validated, without validating the domain through DNS.
     */
    skipDomainVerification?: pulumi.Input<boolean>;
}

export interface WorkspaceSsoMultiTenantPolicy {
    /**
     * Strategy for logging in nonexisting users that match SSO configurations for multiple tenants when no tenant has been specified. Either BLOCK or FIRST_CREATED.
     */
    unspecifiedTenantStrategy?: pulumi.Input<string>;
    /**
     * Whether users with existing accounts that match SSO configurations for multiple tenants should be logged in using the SSO for their active (last logged into) account, or whether the unspecified tenant strategy should apply.
     */
    useActiveTenant?: pulumi.Input<boolean>;
}

export interface WorkspaceSuspiciousIpEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceUserActivationEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceUserInvitationEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}

export interface WorkspaceUserUsedInvitationEmail {
    /**
     * The address to use in the "From" header of the email.
     */
    fromAddress: pulumi.Input<string>;
    /**
     * The name to use in the "From" header of the email.
     */
    fromName: pulumi.Input<string>;
    /**
     * The HTML template to use in the email.
     */
    htmlTemplate: pulumi.Input<string>;
    /**
     * The redirect URL to use, if applicable.
     *
     *     Access this value as "\{\{redirectURL\}\}" in the template.
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * The subject of the email.
     */
    subject: pulumi.Input<string>;
    /**
     * The success redirect URL to use, if applicable.
     */
    successRedirectUrl?: pulumi.Input<string>;
}
