// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg.Inputs
{

    public sealed class WorkspaceAdminPortalPalettePrimaryGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// active color.
        /// </summary>
        [Input("active", required: true)]
        public Input<string> Active { get; set; } = null!;

        /// <summary>
        /// contrast_text color.
        /// </summary>
        [Input("contrastText", required: true)]
        public Input<string> ContrastText { get; set; } = null!;

        /// <summary>
        /// dark color.
        /// </summary>
        [Input("dark", required: true)]
        public Input<string> Dark { get; set; } = null!;

        /// <summary>
        /// hover color.
        /// </summary>
        [Input("hover", required: true)]
        public Input<string> Hover { get; set; } = null!;

        /// <summary>
        /// light color.
        /// </summary>
        [Input("light", required: true)]
        public Input<string> Light { get; set; } = null!;

        /// <summary>
        /// main color.
        /// </summary>
        [Input("main", required: true)]
        public Input<string> Main { get; set; } = null!;

        public WorkspaceAdminPortalPalettePrimaryGetArgs()
        {
        }
        public static new WorkspaceAdminPortalPalettePrimaryGetArgs Empty => new WorkspaceAdminPortalPalettePrimaryGetArgs();
    }
}
