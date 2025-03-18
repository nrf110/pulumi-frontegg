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
    public sealed class WorkspaceAdminPortalPaletteLoginBoxPrimary
    {
        /// <summary>
        /// active color.
        /// </summary>
        public readonly string Active;
        /// <summary>
        /// contrast_text color.
        /// </summary>
        public readonly string ContrastText;
        /// <summary>
        /// dark color.
        /// </summary>
        public readonly string Dark;
        /// <summary>
        /// hover color.
        /// </summary>
        public readonly string Hover;
        /// <summary>
        /// light color.
        /// </summary>
        public readonly string Light;
        /// <summary>
        /// main color.
        /// </summary>
        public readonly string Main;

        [OutputConstructor]
        private WorkspaceAdminPortalPaletteLoginBoxPrimary(
            string active,

            string contrastText,

            string dark,

            string hover,

            string light,

            string main)
        {
            Active = active;
            ContrastText = contrastText;
            Dark = dark;
            Hover = hover;
            Light = light;
            Main = main;
        }
    }
}
